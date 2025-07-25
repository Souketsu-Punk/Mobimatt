import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

const RootLayout = () =>{
  return(
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="explore" />
    <Stack.Screen name="index" />
  </Stack>
);

}

export default RootLayout