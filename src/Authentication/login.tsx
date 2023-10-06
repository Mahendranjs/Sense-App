import { Box, Button } from "native-base";
import React from "react"
import { View, Text } from "react-native";

export default function LoginScreen() {
    return (
        <View>
            <Text>Hi </Text>
            <Box alignItems="center">
                <Button onPress={() => console.log("hello world")}>Click Me</Button>
            </Box>
        </View>
    )
}