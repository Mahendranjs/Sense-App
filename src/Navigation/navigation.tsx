import React from "react"
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayScreen from "../Screens/day";
import TrendsScreen from "../Screens/trends";
import AlertsScreen from "../Screens/alerts";
import ProfileScreen from "../Screens/profile";
const Tab = createBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Authentication/login";
import SignUpScreen from "../Authentication/sign-up";

const Stack = createStackNavigator();

const Main = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
