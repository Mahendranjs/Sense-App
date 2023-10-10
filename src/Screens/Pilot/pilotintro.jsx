import React from "react"
import { Box, Button, Flex, FormControl, Heading, Input, Link, ScrollView, Text, VStack,View } from "native-base";

export default function PilotIntroScreen(props) {
    return (
        <View flex={1} h="100%" w="100%" backgroundColor="primary.500" color="#ffff">
            <View w="100%" px={6} mt={200}>
            <ScrollView>
                <Text fontWeight="normal" fontSize="lg">
                    Dear User,
                </Text>
                <Text mt={4} fontWeight="normal" fontSize="sm">
                    Welcome to the <Text fontWeight="semibold">GlucoSense Pilot</Text> - your dedicated partner in the journey towards effective diabetes management. We
                    are thrilled to have you on board, we want to extend our heartfelt thanks for joining us on this mission!
                </Text>
                <Text mt={4} fontWeight="normal" fontSize="sm">
                    Our goal is to empower individuals with diabetes to take charge of their health, providing you with the tools, knowledge,
                    and support needed to lead a vibrant, fulfilling life. Together, we'll navigate the intricacies of diabetes management, making each
                    step of the way a litte easier. Here's to a future filled with better health and brighter days!
                </Text>
                <Text mt={4} fontWeight="normal" fontSize="sm">
                    Warm regards,
                </Text>
                <Text mt={1} fontWeight="semibold" fontSize="md">
                    The GlucoseSense Team
                </Text>
                </ScrollView>
            </View>
            <View px={6} w="100%" position="absolute" bottom={3}>
                <Button  mt="5" rounded="lg" flexGrow={1} variant="outline" color="#FFFFFF" borderColor="white" fontSize="lg" _text={{ color:'white'}} fontWeight="800" size="md" onPress={() => props.navigation.navigate('MedicalInfo')}> Get Started</Button>
                </View>
       
        </View>
    )
}