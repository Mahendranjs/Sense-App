import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, FormControl, Heading, HStack, Input, KeyboardAvoidingView, ScrollView, View, VStack, Text } from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
const TopTab = createMaterialTopTabNavigator();

const MedicalInfoScreen = (props) => {
    const Tab1 = () => {

        function onNext() {
            props.navigation.navigate('Tab2')
        }
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView backgroundColor="#ffffff"
                    style={{ flex: 1 }}
                    behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.select({ ios: 70, android: 0 })}>
                    <View size="full" px={6} flex={1}>
                        <ScrollView keyboardShouldPersistTaps="handled" >
                            <Heading size="md" py={4} fontWeight="500" color="black">Medical Information</Heading>
                            <VStack variant="" space={2} w="100%" pt={1} >
                                <FormControl>
                                    <FormControl.Label>I am a...</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Select diabetes type" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>What is your typical A1C?</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Select diabetes type" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>How would you describe your diabetes management?</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Select diabetes type" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Have you ever experienced any of the following as a result of having diabetes?</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Phone" placeholderTextColor="gray.400" />
                                </FormControl>
                                <Text color="#FF0000">List experiences diabetics may struggle with</Text>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" _text={{ fontWeight: "semibold" }} variant="outline" borderColor="primary.500" flexGrow={1} onPress={() => props.navigation.navigate('Pilot')}>Go Back</Button>
                        <Button rounded="lg" size="md" flexGrow={1} _text={{ fontWeight: "semibold" }} onPress={() => onNext()}>Continue</Button>
                    </HStack>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }

    const Tab2 = () => {

        function onNext() {
            props.navigation.navigate('Tab3')
        }
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView backgroundColor="#ffffff"
                    style={{ flex: 1 }}
                    behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.select({ ios: 70, android: 0 })}>
                    <View size="full" px={6} flex={1}>
                        <ScrollView keyboardShouldPersistTaps="handled" >
                            <Heading size="md" py={4} fontWeight="500" color="black">Medical Information</Heading>
                            <VStack variant="" space={2} w="100%" pt={1}>
                                <Text color="#808080">Do you currently struggle with any of the following...</Text>
                                <Text color="#FF0000">List of Top Diseases</Text>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" variant="outline" _text={{ fontWeight: "semibold" }} borderColor="primary.500" flexGrow={1} onPress={() => props.navigation.navigate('Tab1')}>Go Back</Button>
                        <Button rounded="lg" size="md" flexGrow={1} _text={{ fontWeight: "semibold" }} onPress={() => onNext()}>Continue</Button>
                    </HStack>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }

    const Tab3 = () => {
        
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView backgroundColor="#ffffff"
                    style={{ flex: 1 }}
                    behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.select({ ios: 70, android: 0 })}>
                    <View size="full" px={6} flex={1}>
                        <ScrollView keyboardShouldPersistTaps="handled" >
                            <Heading size="md" py={4} fontWeight="500" color="black">Exercise</Heading>
                            <VStack variant="" space={2} w="100%" pt={1} >
                                <FormControl>
                                    <FormControl.Label>I would describe myself as...</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Select activity level" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Do you find that diabetes limits your ability to achieve your physical activity goals?</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Age" placeholderTextColor="gray.400" />
                                </FormControl>
                                <Text color="#808080">What activities do you typically do? (need better way to word this)</Text>
                                <Text color="#FF0000">List of Top Activities</Text>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" _text={{ fontWeight: "semibold" }} variant="outline" borderColor="primary.500" flexGrow={1} onPress={() => props.navigation.navigate('Tab2')}>Go Back</Button>
                        <Button rounded="lg" size="md"  _text={{ fontWeight: "semibold" }} flexGrow={1} onPress={() => props.navigation.navigate('Login')}>Continue</Button>
                    </HStack>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }


    return (
        <TopTab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: "#ffffff", borderRadius: 30, borderTopWidth: 0, borderBottomWidth: 0, height: 5, pointerEvents: 'none', width: "100%", elevation: 0, padding: 8},
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                height: 4, borderRadius: 50, backgroundColor: '#2dc6c6'
            },
            swipeEnabled: false,
            tabBarGap:4,
        }} >
            <TopTab.Screen name="Tab1" component={Tab1} />
            <TopTab.Screen name="Tab2" component={Tab2} />
            <TopTab.Screen name="Tab3" component={Tab3} />
        </TopTab.Navigator>
    )
}

export default MedicalInfoScreen;
