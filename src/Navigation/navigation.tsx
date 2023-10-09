import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayScreen from "../Screens/day";
import TrendsScreen from "../Screens/trends";
import AlertsScreen from "../Screens/alerts";
import ProfileScreen from "../Screens/profile";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Authentication/login";
import SignUpScreen from "../Authentication/sign-up";
import PilotIntroScreen from "../Screens/Pilot/pilotintro";
import MedicalInfoScreen from "../Screens/Pilot/medicalinfo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DeviceDetails from "../Screens/deviceDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#2dc6c6', tabBarInactiveTintColor: 'black', tabBarIconStyle: { color: '#2dc6c6' }, tabBarStyle: { paddingTop: 5, paddingBottom: 5 } }}>
      <Tab.Screen name="Day" component={DayScreen} />
      <Tab.Screen name="Trends" component={TrendsScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerTitle: '',
        tabBarIcon: (props) => (
          <FontAwesome name="user-o" color={props.color} size={16}></FontAwesome>
        ),
        headerRight: () => (
          <Feather name="settings" size={20}></Feather>
        ),
        headerShadowVisible: false,
        headerRightContainerStyle: {
          paddingHorizontal: 20
        }
      }} />
    </Tab.Navigator>
  );
}

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetails} options={{   
         headerLeftLabelVisible:true,
         headerBackTitle:'Device Details',
         headerBackTitleStyle:{
          color:'black',
          fontWeight:'700',
         },
         headerTintColor:'black',
          headerRight: () => (
          <Feather name="settings" size={20}></Feather>
        ),
        headerShadowVisible: false,
        headerTitle: '',
        headerRightContainerStyle: {
          paddingHorizontal: 20
        }}} />
      <Stack.Screen name="Pilot" component={PilotIntroScreen}   options={{ headerShown: false }} />
      <Stack.Screen name="MedicalInfo" component={MedicalInfoScreen}   options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
