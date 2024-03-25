import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OnboardingPages from '../Screens/Onboarding/OnboardingPages'
import LoginPage from '../Screens/Login/LoginPage'


const Stack = createNativeStackNavigator();


const Appnavigation = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="OnboardingPages" component={OnboardingPages}/>
                <Stack.Screen name="LoginPage" component={LoginPage}/>
               

            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Appnavigation