import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { global } from '../styles/GlobalStyles';
import { styles } from '../styles/BmiStyles';

const Bmi = () => {
  const [gender, setGender] = useState('M');
  const [weight, setWeight] = useState(80);
  const [weightUnit, setWeightUnit] = useState('Kg');
  const [height, setHeight] = useState(170);
  const [heightUnit, setHeightUnit] = useState('cm');

  const siWeight = (weightUnit === 'lbs') ? (weight / 2.20462).toFixed(0) : weight;
  const siHeight = (heightUnit === 'in') ? (height * 2.54).toFixed(0) : height;
  const bmi = (siWeight / ((siHeight / 100) ** 2)).toFixed(1);
  const bmiclass = classifyBMI(bmi);

  function changeWeight(){
    if(weightUnit === 'Kg') 
      setWeight((weight * 2.20462).toFixed(0));
    else if(weightUnit === 'lbs') 
      setWeight((weight / 2.20462).toFixed(0));

    setWeightUnit((weightUnit === 'Kg') ? 'lbs' : 'Kg');
  }

  function changeHeight(){
    if(heightUnit === 'cm') 
      setHeight((height / 2.54).toFixed(0));
    else if(heightUnit === 'in') 
      setHeight((height * 2.54).toFixed(0));

    setHeightUnit((heightUnit === 'cm') ? 'in' : 'cm');
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [gender, weight, weightUnit, height, heightUnit]);

  const loadData = async () => {
    try {
      const savedGender = await AsyncStorage.getItem('@gender');
      const savedWeight = await AsyncStorage.getItem('@weight');
      const savedWeightUnit = await AsyncStorage.getItem('@weightUnit');
      const savedHeight = await AsyncStorage.getItem('@height');
      const savedHeightUnit = await AsyncStorage.getItem('@heightUnit');

      if (savedGender !== null) setGender(savedGender);
      if (savedWeight !== null && savedWeight != 0) setWeight(parseInt(savedWeight));
      if (savedWeightUnit !== null) setWeightUnit(savedWeightUnit);
      if (savedHeight !== null && savedHeight != 0) setHeight(parseInt(savedHeight));
      if (savedHeightUnit !== null) setHeightUnit(savedHeightUnit);

      //console.log('Loaded data: ', savedGender, savedWeight, savedWeightUnit, savedHeight, savedHeightUnit);
    } catch (e) {
      console.error('Failed to load steps data:', e);
    }
  };

  const saveData = async () => {
   try {
      await AsyncStorage.setItem('@gender', gender);
      await AsyncStorage.setItem('@weight', weight.toString());
      await AsyncStorage.setItem('@weightUnit', weightUnit);
      await AsyncStorage.setItem('@height', height.toString());
      await AsyncStorage.setItem('@heightUnit', heightUnit);
      
      //console.log('Saved data: ', gender, weight, weightUnit, height, heightUnit);
    } catch (e) {
      console.error('Failed to save steps data:', e);
    }
  };

  return (
    <View style={global.container}>
      <Text style={global.text}>Current BMI: {bmi}{'\n'}</Text>
      <Text style={global.coloredText}>You are: {bmiclass}</Text>
      
      <View style={styles.bmiChart}>
        <View style={[styles.line, { backgroundColor: '#5ac1e9'}]}>
          <Text style={styles.lineText}>Under-{'\n'}weight</Text>
          <Text style={styles.lineText}>{'\n'}{'< 18.5'}{'\n'}</Text>
          <Text style={styles.lineText}>low</Text>
        </View>
        <View style={[styles.line, { backgroundColor: '#5ec982'}]}>
          <Text style={styles.lineText}>Normal</Text>
          <Text style={styles.lineText}>{'\n'}{'18.5 - 24.9'}{'\n'}</Text>
          <Text style={styles.lineText}>ideal</Text>
        </View>
        <View style={[styles.line, { backgroundColor: '#ffd701'}]}>
          <Text style={styles.lineText}>Overweight</Text>
          <Text style={styles.lineText}>{'\n'}{'25.0 - 29.9'}{'\n'}</Text>
          <Text style={styles.lineText}>high</Text>
        </View>
        <View style={[styles.line, { backgroundColor: '#ff0100'}]}>
          <Text style={styles.lineText}>Obese</Text>
          <Text style={styles.lineText}>{'\n'}{'> 29.9'}{'\n'}</Text>
          <Text style={styles.lineText}>very high</Text>
        </View>
      </View>

      <View style={global.container}>
        <View style={[styles.inputContainer, { paddingVertical: 10 }]}>
          <Text style={global.text}>Gender: {gender}</Text>

          <Button style={styles.button} title="  M  " onPress={() => {setGender('M')}} />
          <Button style={styles.button} title="  F  " onPress={() => {setGender('F')}} />
        </View>

        <View style={[global.inputContainer, { paddingVertical: 0 }]}>
          <Text style={global.text}>Weight: </Text>
          <TextInput
            style={global.input}
            onChangeText={setWeight}
            keyboardType="numeric"
            value={weight.toString()}
          />
          <Button title={weightUnit} onPress={changeWeight}/>
        </View>

        <View style={[global.inputContainer, { paddingVertical: 0 }]}>
          <Text style={global.text}>Height: </Text>
          <TextInput
            style={global.input}
            onChangeText={setHeight}
            keyboardType="numeric"
            value={height.toString()}
          />
          <Button title={heightUnit} onPress={changeHeight}/>
        </View>
      </View>
    </View>
  );

  function classifyBMI (bmi){
  if (bmi < 18.5)
      return 'Underweight';
  else if (bmi < 25)
      return 'Normal';
  else if (bmi < 30)
      return 'Overweight';
  else
      return 'Obese';
};
};

export default Bmi;
