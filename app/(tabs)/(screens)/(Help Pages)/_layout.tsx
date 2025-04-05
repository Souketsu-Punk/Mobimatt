// (tabs)/(screens)/(Help Pages)/_layout.tsx
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const RootLayout = () =>{
  return(
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="Account" />
    <Stack.Screen name="Delays" />
    <Stack.Screen name="Display" />
    <Stack.Screen name="Notifications" />
    <Stack.Screen name="Privacy" />
    <Stack.Screen name="Settings" />
    <Stack.Screen name="Troubleshooting" />

  </Stack>
);

}

export default RootLayout
