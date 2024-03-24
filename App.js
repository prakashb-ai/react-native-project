import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingPages from './src/Screens/Onboarding/OnboardingPages';

export default function App() {
  return (
    <View style={styles.container}>
     <OnboardingPages/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
