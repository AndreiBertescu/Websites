import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/HomePage';
import StepCounter from './components/StepCounterPage';
import History from './components/HistoryPage';
import Bmi from './components/BmiPage';
import Stopwatch from './components/StopwatchPage';
import DietPaleo from './components/DietPaleo';
import DietKeto from './components/DietKeto';
import DietVegan from './components/DietVegan';
import DietRaw from './components/DietRaw';
import DietMedit from './components/DietMedit';

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
          name="PaleoDiet"
          component={DietPaleo}
          options={{ title: 'Alimentation plans' }}
        />

        <Stack.Screen
          name="KetoDiet"
          component={DietKeto}
          options={{ title: 'Alimentation plans' }}
        />

        <Stack.Screen
          name="VeganDiet"
          component={DietVegan}
          options={{ title: 'Alimentation plans' }}
        />

        <Stack.Screen
          name="RawDiet"
          component={DietRaw}
          options={{ title: 'Alimentation plans' }}
        />

        <Stack.Screen
          name="MediterraneanDiet"
          component={DietMedit}
          options={{ title: 'Alimentation plans' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
