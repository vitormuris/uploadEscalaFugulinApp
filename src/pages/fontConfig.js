import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function fontConfig (){
  let [fontsLoaded] = useFonts({
    'Adamina': require('../assets/fonts/Adamina-Regular.ttf'), 'Rubik': require('../assets/fonts/Rubik-Regular.ttf'),
    });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
};