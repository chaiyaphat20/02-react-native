import React from 'react';
import QuestionScreen from './src/screen/QuestionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';
import LeaderScreen from './src/screen/LeaderScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='QuestionScreen' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LeaderScreen" component={LeaderScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}