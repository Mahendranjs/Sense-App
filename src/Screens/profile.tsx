import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Avatar, Box, Flex, Heading, View, Text, VStack, ScrollView, Button, Pressable, Switch } from "native-base";
import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TopTab = createMaterialTopTabNavigator();

export default function ProfileScreen(props: any) {

  const style = StyleSheet.create({
    viewToggle: {
      height: 26,
      width: 60,
      borderRadius: 40,
      justifyContent: 'center',
      backgroundColor: '#effaf9',
      gap: 10
    },
    circleToggle: {
      width: 23,
      height: 23,
      borderRadius: 30,
      paddingVertical: 1
    }
  })

  const Personal = () => (
    <View px={4} h="100%" w="100%" pt={3} backgroundColor="#fff" flex={1}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Heading color="black" fontSize="sm">Personal</Heading>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="90%">
            <Text isTruncated color="black" >
              August 10th, 1999
            </Text>
            <Text color="gray.400" fontSize={12}>
              Birthday
            </Text>
          </VStack>
          <VStack w="10%" py={2} alignItems="center" >
            <Text color="#2dc6c6">
              Edit
            </Text>
          </VStack>
        </View>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="90%">
            <Text isTruncated color="black" >
              Kyle.smith@gmail.com
            </Text>
            <Text color="gray.400" fontSize={12}>
              Email
            </Text>
          </VStack>
          <VStack w="10%" py={2} alignItems="center" >
            <Text color="#2dc6c6">
              Edit
            </Text>
          </VStack>
        </View>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="90%">
            <Text isTruncated color="black" >
              555.555.5555
            </Text>
            <Text color="gray.400" fontSize={12}>
              Phone
            </Text>
          </VStack>
          <VStack w="10%" py={2} alignItems="center" >
            <Text color="#2dc6c6">
              Edit
            </Text>
          </VStack>
        </View>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="90%">
            <Text isTruncated color="black" >
              Atlanda Georgia
            </Text>
            <Text color="gray.400" fontSize={12}>
              Location
            </Text>
          </VStack>
          <VStack w="10%" py={2} alignItems="center" >
            <Text color="#2dc6c6">
              Edit
            </Text>
          </VStack>
        </View>


        <View flexDirection="row" mt={3}>
          <VStack py={2} w="80%">
            <Heading color="black" fontSize="sm">Medical Provider</Heading>
          </VStack>
          <VStack w="20%" justifyContent="center" alignItems="flex-end" >
            <Text color="#2dc6c6" fontWeight="semibold">
              Add +
            </Text>
          </VStack>
        </View>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="100%">
            <Text isTruncated color="black" >
              JohnSmith, M.D
            </Text>
            <Text color="gray.400" fontSize={12}>
              Doctor
            </Text>
          </VStack>
        </View>
        <View flexDirection="row" ml={1}>
          <VStack py={2} w="100%">
            <Text isTruncated color="black" >
              54321 Green Tree Lane DR. NE Atlanta 30324
            </Text>
            <Text color="gray.400" fontSize={12}>
              Practice
            </Text>
          </VStack>
        </View>
      </ScrollView>
    </View>

  );

  const Device = () => {
    const cardClick = () => {
      props.navigation.navigate('DeviceDetails');
    }
    return (
      <View px={4} w="100%" pt={3} backgroundColor="#fff" flex={1}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Pressable w="100%" mb={3} rounded="lg" flexDirection="row" overflow="hidden" borderColor="coolGray.200" borderWidth="0.8" onPress={() => cardClick()}>
            <View w="80%" flexDirection="row">
              <View pl={2} py={3} alignItems="center">
                <Avatar size="sm" alignSelf="center" bg="transparent" source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/017/221/833/large_2x/apple-logo-free-png.png"
                }}></Avatar>
              </View>
              <VStack px={1} py={3} space={0.5}>
                <Heading color="black" fontSize="xs" isTruncated>Apple Watch Model4</Heading>
                <Text color="gray.400" isTruncated fontSize={10}>
                  Apple
                </Text>
              </VStack>
            </View>
            <VStack px={1} py={2} justifyContent="center" alignItems="flex-end">
              <Text fontSize={11} color="#2dc6c6">
                Details
              </Text>
              <Text color="gray.400" fontSize={10}>
                Connected
              </Text>
            </VStack>
          </Pressable>
          <Pressable w="100%" mb={3} rounded="lg" flexDirection="row" overflow="hidden" borderColor="coolGray.200" borderWidth="0.8" onPress={() => cardClick()}>
            <View w="80%" flexDirection="row">
              <View pl={2} py={3} alignItems="center">
                <Avatar size="sm" alignSelf="center" bg="transparent" source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/017/221/833/large_2x/apple-logo-free-png.png"
                }}></Avatar>
              </View>
              <VStack px={1} py={3} space={0.5}>
                <Heading color="black" fontSize="xs" isTruncated>Apple Watch Model4</Heading>
                <Text color="gray.400" isTruncated fontSize={10}>
                  Apple
                </Text>
              </VStack>
            </View>
            <VStack px={1} py={2} justifyContent="center" alignItems="flex-end">
              <Text fontSize={11} color="#2dc6c6">
                Details
              </Text>
              <Text color="gray.400" fontSize={10}>
                Connected
              </Text>
            </VStack>
          </Pressable>
          <Pressable w="100%" mb={3} rounded="lg" flexDirection="row" overflow="hidden" borderColor="coolGray.200" borderWidth="0.8" onPress={() => cardClick()}>
            <View w="80%" flexDirection="row">
              <View pl={2} py={3} alignItems="center">
                <Avatar size="sm" alignSelf="center" bg="transparent" source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/017/221/833/large_2x/apple-logo-free-png.png"
                }}></Avatar>
              </View>
              <VStack px={1} py={3} space={0.5}>
                <Heading color="black" fontSize="xs" isTruncated>Apple Watch Model4</Heading>
                <Text color="gray.400" isTruncated fontSize={10}>
                  Apple
                </Text>
              </VStack>
            </View>
            <VStack px={1} py={2} justifyContent="center" alignItems="flex-end">
              <Text fontSize={11} color="#2dc6c6">
                Details
              </Text>
              <Text color="gray.400" fontSize={10}>
                Connected
              </Text>
            </VStack>
          </Pressable>
          <Button mt="2" rounded="lg" variant="outline" borderColor="primary.600" fontSize="lg" fontWeight="bold" size="md" _text={{ fontWeight: "semibold" }}>+ Add Device</Button>
        </ScrollView>
      </View>
    );
  }
  const Medical = () => {

    const [state, setState] = useState(false)
    return (
      <View px={4} w="100%" pt={3} backgroundColor="#fff" flex={1}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View flexDirection="row">
            <VStack py={2} w="82%">
              <Heading color="black" fontSize="sm">Medical Information</Heading>
            </VStack>
            <VStack w="18%" justifyContent="center" alignItems="center" >
              <TouchableWithoutFeedback onPress={() => {
                setState(!state)
              }}>
                <View style={[style.viewToggle]} display="flex" alignItems="center" justifyContent="" flexDirection="row">
                  <View pl={0.5} style={[style.circleToggle, state ? { backgroundColor: '#2dc6c6' } : { backgroundColor: 'transparent' }]}>
                    <MaterialIcons name={"lock-outline"} size={18}></MaterialIcons>
                  </View>
                  <View pl={0.5} style={[style.circleToggle, !state ? { backgroundColor: '#2dc6c6' } : { backgroundColor: 'transparent' }]}>
                    <MaterialIcons name={"lock-open"} size={18}></MaterialIcons>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </VStack>
          </View>
          <View flexDirection="row" ml={1}>
            <VStack py={2}>
              <Text isTruncated color="black" >
                Type 1 Diabetes
              </Text>
              <Text color="gray.400" fontSize={12}>
                Diabetes
              </Text>
            </VStack>
          </View>
          <View flexDirection="row" ml={1}>
            <VStack py={2}>
              <Text isTruncated color="black" >
                5' 11'
              </Text>
              <Text color="gray.400" fontSize={12}>
                Height
              </Text>
            </VStack>
          </View>
          <View flexDirection="row" ml={1}>
            <VStack py={2}>
              <Text isTruncated color="black" >
                156'lbs
              </Text>
              <Text color="gray.400" fontSize={12}>
                Weight
              </Text>
            </VStack>
          </View>
        </ScrollView>
      </View>
    );
  }

  const CustomTabBarButton = ({children, onPress, style, isFocused }) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <View>
        <Text style={{ color: isFocused ? '#2dc6c6' : 'grey', fontWeight: isFocused ? 'bold' : '400' }}>{children}</Text>
        {!isFocused && (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Flex alignItems="center" backgroundColor="#fff">
        <Avatar bg="purple.600" alignSelf="center" size="xl" source={{
          uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>
          RB
        </Avatar>
        <Box py={3} alignItems="center" >
          <Heading size="sm" color="black">Kyle Smith</Heading>
          <Text color="gray.400" pt={1} fontWeight="semibold" fontSize="xs">Joined Sep 20th, 2023</Text>
        </Box>

      </Flex>
      <TopTab.Navigator tabBar={(props: any) => (

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#ffffff',
            height: 28,
            borderBottomWidth: 0.3,
            borderBottomColor: 'gray'
          }}
        >
          {props.state.routes.map((route: any, index: any) => {
            const isFocused = props.state.index === index;
            return (
              <CustomTabBarButton
                key={route.key}
                onPress={() => props.navigation.navigate(route.name)}
                style={{
                  color: isFocused ? '#2dc6c6' : 'grey',
                }}
                isFocused={isFocused}
              >
                {route.name}
              </CustomTabBarButton>
            );
          })}
        </View>
      )} screenOptions={{
        tabBarLabel: () => null, // Hide default tab label
      }}>

        <TopTab.Screen name="Account" component={Personal} />
        <TopTab.Screen name="Devices" component={Device} />
        <TopTab.Screen name="Medical" component={Medical} options={{ tabBarLabel: () => '' }} />
      </TopTab.Navigator>
    </>

  )
}

