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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TopTab.Navigator >
      <TopTab.Screen name="Home" component={SignUpScreen} options={{
        tabBarStyle: { backgroundColor: "#fff", borderTopWidth: 0,height:10 },
        tabBarShowLabel: false}} />
      <TopTab.Screen name="Alerts" component={AlertsScreen} options={{
        tabBarStyle: { backgroundColor: "#fff",height:10, borderTopWidth: 0,},
        tabBarShowLabel: false}} />
    </TopTab.Navigator>
  );
}

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
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={MyTabs} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
