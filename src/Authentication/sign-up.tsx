import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, FormControl, Heading, HStack, Input, KeyboardAvoidingView, ScrollView, View, VStack } from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
const TopTab = createMaterialTopTabNavigator();

const SignUpScreen = (props: any) => {
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
                            <Heading size="md" py={4} fontWeight="500" color="black">Contact Information</Heading>
                            <VStack variant="" space={2} w="100%" pt={1} >
                                <FormControl>
                                    <FormControl.Label>First Name</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="First Name" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Last Name</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Last Name" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Email" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Phone</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Phone" placeholderTextColor="gray.400" />
                                </FormControl>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" _text={{ fontWeight: "semibold" }} variant="outline" borderColor="primary.500" flexGrow={1} onPress={() => console.log("hello world")}>Back To Login</Button>
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
                            <Heading size="md" py={4} fontWeight="500" color="black">Location</Heading>
                            <VStack variant="" space={2} w="100%" pt={1} >
                                <FormControl>
                                    <FormControl.Label>Adddress Line 1</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Address Line 1" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Adddress Line 2</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Address Line 2" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>City</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="City" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>State</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="State" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Zip Code</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Zip Code" placeholderTextColor="gray.400" />
                                </FormControl>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" variant="outline" _text={{ fontWeight: "semibold" }} borderColor="primary.500" flexGrow={1} onPress={() => props.navigation.goBack()}>Go Back</Button>
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
                            <Heading size="md" py={4} fontWeight="500" color="black">Information</Heading>
                            <VStack variant="" space={2} w="100%" pt={1} >
                                <FormControl>
                                    <FormControl.Label>Gender</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Gender" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Age</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Age" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Height</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Height" placeholderTextColor="gray.400" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Weight</FormControl.Label>
                                    <Input borderColor="gray.400" type="text" rounded="lg" _input={{ color: "text.700", fontSize: "sm" }} placeholder="Weight" placeholderTextColor="gray.400" />
                                </FormControl>
                            </VStack>
                        </ScrollView>
                    </View>
                    <HStack px={6} position="absolute" bottom={2} space={5} >
                        <Button rounded="lg" fontSize="lg" fontWeight="800" size="md" _text={{ fontWeight: "semibold" }} variant="outline" borderColor="primary.500" flexGrow={1} onPress={() => props.navigation.navigate('Tab2')}>Go Back</Button>
                        <Button rounded="lg" size="md"  _text={{ fontWeight: "semibold" }} flexGrow={1} onPress={() => console.log("hello world")}>Continue</Button>
                    </HStack>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }


    return (
        <TopTab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: "#fff", borderRadius: 30, borderTopWidth: 0, borderBottomWidth: 0, height: 5, pointerEvents: 'none', width: "100%", gap: 4 },
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                height: 4, borderRadius: 50, backgroundColor: '#2dc6c6'
            },
            tabBarInactiveTintColor: "#2dc6c6",
            swipeEnabled: false,
            tabBarContentContainerStyle: {
                gap: 10
            },

        }} >
            <TopTab.Screen name="Tab1" component={Tab1} />
            <TopTab.Screen name="Tab2" component={Tab2} />
            <TopTab.Screen name="Tab3" component={Tab3} />
        </TopTab.Navigator>
    )
}

export default SignUpScreen;
