import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const RootLayout = () =>{
  return(
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="Change" />
    <Stack.Screen name="Details" />
  </Stack>
);

}

export default RootLayout