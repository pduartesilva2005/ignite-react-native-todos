import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Home } from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
