import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const RootLayout = () =>{
  return(
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="Earnings" />
    <Stack.Screen name="Help" />
    <Stack.Screen name="Insurance" />
    <Stack.Screen name="PushNotif" />
    <Stack.Screen name="ReceivedPayments" />
    <Stack.Screen name="(Help Pages)" />
    <Stack.Screen name="(Insurance Pages)" />

  </Stack>
);

}

export default RootLayout