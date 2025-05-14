import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, BackHandler, TextInput } from 'react-native';

import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { global } from '../styles/GlobalStyles';
import { styles } from '../styles/HistoryStyles';

const History = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [minutes, setMinutes] = useState('');
  const [exercises, setExercises] = useState('');
  const [rating, setRating] = useState(5);

  function addWorkout(){
    if (!title.trim()) return;
    if (!type.trim()) return;
    if (!minutes.trim()) return;
    if (!exercises.trim()) return;

    const newWorkout = {
      id: workouts.length + 1,
      title: title,
      type: type,
      minutes: minutes,
      exercises: exercises,
      rating: rating
    }

    setTitle('');
    setType('');
    setMinutes('');
    setExercises('');
    setRating(5);

    setWorkouts([...workouts, newWorkout]);
    saveWorkouts([...workouts, newWorkout]);
    setShowOverlay(false);
  }

  const saveWorkouts = async (workouts) => {
    try {
      const jsonValue = JSON.stringify(workouts);
      await AsyncStorage.setItem('@workouts', jsonValue);

      //console.log('Workouts saved', workouts);
    } catch (e) {
      console.error('Failed to save workouts:', e);
    }
  };

  const loadWorkouts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@workouts');
      if(jsonValue != null) setWorkouts(JSON.parse(jsonValue));

      //console.log('Workouts loaded', workouts);
    } catch (e) {
      console.error('Failed to load workouts:', e);
      return [];
    }
  };

  // Disable overlay when the back button is pressed
  useEffect(() => {
    if (!showOverlay) return;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      setShowOverlay(false);
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [showOverlay]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <View style={global.container}>
      <Text style={global.titlu}>Past workouts</Text>

      <View style={global.hr}>
        <View style={global.line} />
      </View>

      <ScrollView style={styles.workoutList}>
        {[...workouts].reverse().map((workout) => (
          <View key={workout.id} style={styles.workoutWrapper}>
            <Text style={styles.workoutText}>
              <Text style={styles.staticText}># {workout.id.toString().padStart(2, '0')}</Text> --- 
              <Text style={styles.staticText}>Title:</Text> {workout.title} --- 
              <Text style={styles.staticText}>Type:</Text> {workout.type}
            </Text>
            <Text style={styles.workoutText}>
              <Text style={styles.staticText}>Duration:</Text> {workout.minutes} min --- 
              <Text style={styles.staticText}> No. of exercises:</Text> {workout.exercises}
            </Text>
            <Text style={styles.workoutText}>
              <Text style={styles.staticText}>Rating:</Text> {workout.rating}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={global.hr}>
        <View style={global.line} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={()=>{setShowOverlay(true);}} style={styles.circleButton}>
          <Text style={[global.text, { color: 'white' }]}>Add new workout</Text>
        </TouchableOpacity>
      </View>

      {showOverlay && (
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Add Workout</Text>
            <Text style={styles.text}> *all fields are required</Text>

            <View style={global.inputContainer}>
              <Text style={global.coloredText}>Workout Title: </Text>
              <TextInput
                style={[global.input, {width: '55%'}]}
                placeholder="Morning workout"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            
            <View style={global.inputContainer}>
              <Text style={global.coloredText}>Workout Type: </Text>
              <TextInput
                style={[global.input, {width: '40%'}]}
                placeholder="Back"
                value={type}
                onChangeText={setType}
              />
            </View>
            
            <View style={global.inputContainer}>
              <Text style={global.coloredText}>Duration (minutes): </Text>
              <TextInput
                style={global.input}
                placeholder="60"
                value={minutes}
                onChangeText={setMinutes}
                keyboardType="numeric"
              />
            </View>
            
            <View style={global.inputContainer}>
              <Text style={global.coloredText}>Number of Exercises: </Text>
              <TextInput
                style={global.input}
                placeholder="4"
                value={exercises}
                onChangeText={setExercises}
                keyboardType="numeric"
              />
            </View>
            
            <View style={global.inputContainer}>
              <Text style={global.coloredText}>Rating: {rating}/10</Text>
              <Slider
                style={{width: '70%'}}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={rating}
                onValueChange={setRating}
                minimumTrackTintColor="#1fb28a"
                maximumTrackTintColor="#ccc"
              />
            </View>
          
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => {setShowOverlay(false);}} style={styles.addButton}>
                <Text style={{ color: 'white' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addWorkout} style={styles.addButton}>
                <Text style={{ color: 'white' }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default History;
