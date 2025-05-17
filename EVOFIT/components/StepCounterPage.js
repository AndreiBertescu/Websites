import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native'; 
import * as Progress from 'react-native-progress';
import { Pedometer } from 'expo-sensors';

import { global } from '../styles/GlobalStyles';

const StepCounter = () => {

  const [goalSteps, setGoalSteps] = useState(1);
  const [tempGoalSteps, setTempGoalSteps] = useState(2);
  const [currentSteps, setCurrentSteps] = useState(0);

  const [gender, setGender] = useState('M');
  const [weight, setWeight] = useState(70);

  const progress = (goalSteps === 0) ? 10 : (currentSteps / (goalSteps+1));

  const strideLength = (gender == 'F') ? 0.762 : 0.8;
  const caloriesPerStep = getCaloriesPerStep(weight);
  const distanceKm = ((currentSteps * strideLength) / 1000).toFixed(2);
  const calories = (currentSteps * caloriesPerStep).toFixed(0);

  // Run loadStepsData every time the page comes into focus
  useFocusEffect(
    React.useCallback(() => {
      // Load current steps goal, gender and weight
      loadData();

      // Load current steps
      if (Platform.OS === 'android') loadStepCounterAndroid();
      else if (Platform.OS === 'ios') loadStepCounterIos();
    }, [])
  );

  const loadData = async () => {
    try {
      const savedGoal = await AsyncStorage.getItem('@step_goal');
      
      const savedGender = await AsyncStorage.getItem('@gender');
      const savedWeight = await AsyncStorage.getItem('@weight');
      const savedWeightUnit = await AsyncStorage.getItem('@weightUnit');

      if (savedGoal !== null && savedGoal != 0 && !isNaN(savedWeight)) {
        setGoalSteps(parseInt(savedGoal));
        saveStepsData(parseInt(savedGoal), -1);
      }
      if (savedGender !== null) setGender(savedGender);
      if (savedWeight !== null && savedWeight != 0 && !isNaN(savedWeight)) setWeight((savedWeightUnit === 'kg') ? parseInt(savedWeight) : (parseInt(savedWeight) / 2.20462).toFixed(0));

      //console.log('Loaded data: ', savedGoal, savedGender, savedWeight, savedWeightUnit, (savedWeightUnit === 'Kg') ? parseInt(savedWeight) : (parseInt(savedWeight) / 2.20462).toFixed(0));
    } catch (e) {
      console.error('Failed to load steps data:', e);
    }
  };

  const saveStepsData = async (goal, steps) => {
    try {
      if (goal != -1) await AsyncStorage.setItem('@step_goal', goal.toString());
      if (steps != -1) await AsyncStorage.setItem('@current_steps', steps.toString());
      
      //console.log("Saved steps: ", goal, steps);
    } catch (e) {
      console.error('Failed to save steps data:', e);
    }
  };

  const changeGoal = () => {
    if (tempGoalSteps == 0 || tempGoalSteps === '' || tempGoalSteps >= 100000) return;
    setGoalSteps(tempGoalSteps);
    saveStepsData(tempGoalSteps, -1);
  };

  const loadStepCounterAndroid = async () => {
    try {
      const savedCurrent = await AsyncStorage.getItem('@current_steps');

      if (savedCurrent !== null  && savedCurrent != 0  && !isNaN(savedCurrent)) {
        setCurrentSteps(parseInt(savedCurrent) + 200);
        saveStepsData(-1, parseInt(savedCurrent) + 200);
      } else {
        setCurrentSteps(200);
        saveStepsData(-1, 200);
      }
    } catch (e) {
      console.error('Failed to load steps data:', e);
    }
  };

  const loadStepCounterIos = async () => {
    try {
      // Get the current date and yesterday's date
      const end = new Date(); // now
      const start = new Date();

      // Set start time to midnight today
      start.setHours(0, 0, 0, 0);

      // Get step data from midnight to now
      const result = await Pedometer.getStepCountAsync(start, end);
      setCurrentSteps(result.steps);
      saveStepsData(-1, result.steps);

      //console.log('Got ios step count', result.steps);
    } catch (error) {
      console.log('Could not get step count:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView contentContainerStyle={global.mainContainer}>
      <Text style={global.header}>View current steps and change your goal</Text>

      <View style={global.container}>
        <Progress.Circle 
          size="200"
          progress={progress}
          showsText={true}
          color="#4467c4"
          borderWidth={0}
          thickness={10}
          unfilledColor="#F5F5F5"
          formatText={() => `${Math.round(progress * 100)}%`}
        />
      </View>

      <Text style={[global.coloredText, { fontSize: 20 }]}>Current progress: {currentSteps} / {goalSteps} steps</Text>

      <View style={[global.inputContainer, { justifyContent: 'center' }]}>
        <Text style={global.text}>Change your current goal: </Text>
        <TextInput
          style={global.input}
          onChangeText={setTempGoalSteps}
          keyboardType="numeric"
          placeholder={goalSteps.toString()}
        />
        <Button title="Change" onPress={changeGoal} />
      </View>

      <Text style={[global.text, { marginBottom: 20 }]}>Total steps take today: {currentSteps}</Text>
      <Text style={[global.text, { marginBottom: 20 }]}>Kilometers walked today: {distanceKm} km</Text>
      <Text style={[global.text, { marginBottom: 20 }]}>Calories burned: {calories} kcal</Text>
      <Text style={[global.text, { marginBottom: 20 }]}>Equivalent to walking {(distanceKm / 0.312).toFixed(1)} Eiffel Towers</Text>
    </ScrollView>
    </SafeAreaView>
  );
};

function getCaloriesPerStep(weightKg) {
  if (weightKg <= 0) return 0;

  // Basic linear model between 50kg–100kg
  const minWeight = 50;
  const maxWeight = 100;
  const minCalories = 0.035;
  const maxCalories = 0.06;

  // Clamp weight between 50 and 100
  const clampedWeight = Math.max(minWeight, Math.min(maxWeight, weightKg));

  // Linear interpolation
  const ratio = (clampedWeight - minWeight) / (maxWeight - minWeight);
  return minCalories + (maxCalories - minCalories) * ratio;
}

export default StepCounter;
