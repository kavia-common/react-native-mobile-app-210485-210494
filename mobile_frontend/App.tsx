import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import RootNavigation from './src/navigation/TabNavigator';

export default function App(): JSX.Element {
  // enable native screens for performance
  useEffect(() => {
    enableScreens(true);
  }, []);

  return (
    <>
      <RootNavigation />
      <StatusBar style="auto" />
    </>
  );
}
