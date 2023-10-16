import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Dashboard from "../Screens/Day/Dashboard";
import { ChevronLeftIcon, Heading, HStack, Pressable, Text, VStack, ChevronRightIcon } from "native-base";
import Sleep from "../Screens/Day/Sleep";
import StrainExcercise from "../Screens/Day/StrainExcercise";
import SleepDetailScreen from "../Screens/Day/SleepDetails";
import WakeUpDetailScreen from "../Screens/Day/WakeUpDetails";
import UnTaggedScreen from "../Screens/Day/UnTagged";
// import ChartScreen from "../Screens/chart";
import UnTaggedEventDetailScreen from "../Screens/Day/UnTaggedEventDetails";
import OutdoorDetailScreen from "../Screens/Day/OutDoorDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DayRoute(props: any) {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={({ route }) => ({
      headerTitle: '',
      headerLeft: (props) => {
        return (
          <VStack px={3} pb={3}>
            <Heading fontSize="md" color="black">Today Sep 12</Heading>
            <Text fontSize="xs" color="gray.400">Daily Report</Text>
          </VStack>
        )
      },
      headerRight: (prop: any) => {
        const BackNavigation = () => {
          switch (route.name) {
            case 'Dashboard':
              props.navigation.goBack(null);
              break;
            case 'Sleep':
              props.navigation.navigate('Dashboard')
              break;
            case 'StrainExcercise':
              props.navigation.navigate('Sleep')
              break;
            case 'UnTaggedEvent':
              props.navigation.navigate('StrainExcercise')
              break;
          }
        }

        const forwardNavigation = () => {
          switch (route.name) {
            case 'Dashboard':
              props.navigation.navigate('Sleep');
              break;
            case 'Sleep':
              props.navigation.navigate('StrainExcercise')
              break;
            case 'StrainExcercise':
              props.navigation.navigate('UnTaggedEvent')
              break;
          }
        }
        return (
          <HStack px={3} pb={3} space={2}>
            <Pressable display="flex" style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: "#E4F6F7", alignItems: "center", justifyContent: "center" }} onPress={() => BackNavigation()}>
              <ChevronLeftIcon size="4" color="black" />
              {/* <MaterialIcons name="arrow-back-ios" color="black" size={14}></MaterialIcons> */}
            </Pressable>
            <Pressable display="flex" style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: "#E4F6F7", alignItems: "center", justifyContent: "center" }} onPress={() => forwardNavigation()}>
              <ChevronRightIcon size="4" color="black" />
              {/* <MaterialIcons name="arrow-forward-ios" color="black" size={14}></MaterialIcons> */}
            </Pressable>
          </HStack>
        )
      },
      headerStatusBarHeight: 24,
      headerStyle: {
        backgroundColor: "#ffffff",
        borderBottomWidth: 0,
        borderWidth: 0,
        borderBottomColor: '#ffffff'
      }
    })}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} options={{
        headerStyle: {
          backgroundColor: "#ffffff",
          shadowOffset: {
            height: 0,
            width: 0
          }
        }
      }} />
      <Stack.Screen name="Sleep" component={Sleep} options={{ headerStyle: { backgroundColor: "#ffffff" } }} />
      <Stack.Screen name="StrainExcercise" component={StrainExcercise} options={{ headerStyle: { backgroundColor: "#ffffff" } }} />
      <Stack.Screen name="UnTaggedEvent" component={UnTaggedScreen} options={{ headerStyle: { backgroundColor: "#ffffff" } }} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator initialRouteName="Day" screenOptions={{ tabBarActiveTintColor: '#2dc6c6', tabBarInactiveTintColor: 'black', tabBarIconStyle: { color: '#2dc6c6' }, tabBarStyle: { paddingTop: 5, paddingBottom: 5 } }}>
      <Tab.Screen name="Day" component={DayRoute} options={{
        headerShown: false, tabBarIcon: (props) => (
          <Entypo name="line-graph" color={props.color} size={16}></Entypo>
        )
      }} />
      <Tab.Screen name="Trends" component={TrendsScreen} options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons name="calendar" color={props.color} size={16}></MaterialCommunityIcons>
        )
      }} />
      <Tab.Screen name="Alerts" component={AlertsScreen} options={{
        tabBarIcon: (props) => (
          <MaterialIcons name="notifications-none" color={props.color} size={16}></MaterialIcons>
        )
      }} />
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
          headerLeftLabelVisible: true,
          headerBackTitle: 'Device Details',
          headerBackTitleStyle: {
            color: 'black',
            fontWeight: '700',
          },
          headerTintColor: 'black',
          headerRight: () => (
            <Feather name="settings" size={20}></Feather>
          ),
          headerShadowVisible: false,
          headerTitle: '',
          headerRightContainerStyle: {
            paddingHorizontal: 20
          }
        }} />
        <Stack.Screen name="Pilot" component={PilotIntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MedicalInfo" component={MedicalInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SleepDetails" component={SleepDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WakeUpDetails" component={WakeUpDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UnTaggedEventDetails" component={UnTaggedEventDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OutdoorDetails" component={OutdoorDetailScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="charts" component={ChartScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
