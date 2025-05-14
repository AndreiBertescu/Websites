import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/HomePage';
import StepCounter from './components/StepCounterPage';
import History from './components/HistoryPage';
import Bmi from './components/BmiPage';
import Stopwatch from './components/StopwatchPage';
import Plan1 from './components/PlanPage1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Step Counter"
          component={StepCounter}
          options={{ title: 'Step Counter' }}
        />

        <Stack.Screen
          name="Workout History"
          component={History}
          options={{ title: 'Workout History' }}
        />

        <Stack.Screen
          name="Bmi Calculator"
          component={Bmi}
          options={{ title: 'Bmi calculator' }}
        />

        <Stack.Screen
          name="Stopwatch"
          component={Stopwatch}
          options={{ title: 'Stopwatch' }}
        />

        <Stack.Screen
          name="Plan 1"
          component={Plan1}
          options={{ title: 'Alimentation plans' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
