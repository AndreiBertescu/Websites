import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native'; 
import * as Progress from 'react-native-progress';

import { global } from '../styles/GlobalStyles';
import { styles } from '../styles/HomeStyles';

const HomePage = ({ navigation }) => {
  const [goalSteps, setGoalSteps] = useState(1);
  const [currentSteps, setCurrentSteps] = useState(0);
  const progress = (goalSteps === 0) ? 99 : Math.min(currentSteps / goalSteps, 1);

  // Run loadStepsData every time the page comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadStepsData();
    }, [])
  );

  const loadStepsData = async () => {
    try {
      const savedGoal = await AsyncStorage.getItem('@step_goal');
      const savedCurrent = await AsyncStorage.getItem('@current_steps');

      if (savedGoal !== null && savedGoal != 0) setGoalSteps(parseInt(savedGoal));
      if (savedCurrent !== null) setCurrentSteps(parseInt(savedCurrent));
      
      //console.log("Loaded steps: ", savedGoal, savedCurrent);
    } catch (e) {
      console.error('Failed to load steps data:', e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView contentContainerStyle={global.mainContainer}>
      <Text style={global.titlu}>EvoFit</Text>
      <Text style={global.header}>For all your fitness needs</Text>

      <View style={styles.grid}>
        <TouchableOpacity onPress={() => navigation.navigate('Step Counter')} style={styles.customButton}>
          <Text style={styles.customButtonText}>Step Counter</Text>
          <Text style={global.coloredText}>{currentSteps} / {goalSteps} steps</Text>

          <Progress.Circle 
            size={100} // Dimensions.get('window').width * 0.25
            progress={progress}
            marginTop={7}
            showsText={true}
            color="#4467c4"
            borderWidth={0}
            thickness={15}
            unfilledColor="#F5F5F5"
            formatText={() => `${Math.round(progress * 100)}%`}
          />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Stopwatch')} style={styles.customButton}>
          <Text style={styles.customButtonText}>Stopwatch</Text>
          <Image
            source={require('../assets/stopwatch.jpg')}
            style={{ width: "70%", height: "70%", marginTop: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Bmi Calculator')} style={styles.customButton}>
          <Text style={styles.customButtonText}>Bmi Calculator</Text>

          <Image
            source={require('../assets/bmi-calculator.png')}
            style={{ width: "80%", height: "80%", marginTop: 0 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Workout History')} style={styles.customButton}>
          <Text style={styles.customButtonText}>Workout History</Text>

          <Image
            source={require('../assets/icon_big.png')}
            style={{ width: "60%", height: "60%", marginTop: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View style={global.hr}>
        <View style={global.line} />
        <Text style={global.hrText}>Alimentation plans</Text>
        <View style={global.line} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Plan 1')} style={global.longButton}>
          <Text style={global.customButtonText}>Paleo Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Plan 1')} style={global.longButton}>
          <Text style={global.customButtonText}>Keto Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Plan 1')} style={global.longButton}>
          <Text style={global.customButtonText}>Vegan Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Plan 1')} style={global.longButton}>
          <Text style={global.customButtonText}>Raw Food Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Plan 1')} style={global.longButton}>
          <Text style={global.customButtonText}>Mediterranean Diet</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
