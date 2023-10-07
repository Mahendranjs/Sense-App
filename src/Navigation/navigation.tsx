import React from "react"
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayScreen from "../Screens/day";
import TrendsScreen from "../Screens/trends";
import AlertsScreen from "../Screens/alerts";
import ProfileScreen from "../Screens/profile";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Authentication/login";
import SignUpScreen from "../Authentication/sign-up";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Day" component={DayScreen} />
      <Tab.Screen name="Trends" component={TrendsScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Main = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
