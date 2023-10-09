import React from "react"
import { Box, Button, Flex, FormControl, Heading, Input, Link, Text, VStack } from "native-base";

export default function PilotIntroScreen(props) {
    return (
        <Flex h="100%" backgroundColor="primary.500" color="#ffff">
            <Box safeArea w="100%" px={6} mt={200}>
                <Text fontWeight="medium" fontSize="lg">
                    Dear User,
                </Text>
                <Text mt={4} fontWeight="medium" fontSize="lg">
                    Welcome to the <Text bold>GlucoSense Pilot</Text> - your dedicated partner in the journey towards effective diabetes management. We
                    are thrilled to have you on board, we want to extend our heartfelt thanks for joining us on this mission!
                </Text>
                <Text mt={4} fontWeight="medium" fontSize="lg">
                    Our goal is to empower individuals with diabetes to take charge of their health, providing you with the tools, knowledge,
                    and support needed to lead a vibrant, fulfilling life. Together, we'll navigate the intricacies of diabetes management, making each
                    step of the way a litte easier. Here's to a future filled with better health and brighter days!
                </Text>
                <Text mt={4} fontWeight="medium" fontSize="lg">
                    Warm regards,
                </Text>
                <Text mt={2} fontWeight="bold" fontSize="lg">
                    The GlucoseSense Team
                </Text>
                <Button mt="10" rounded="lg" variant="outline" color="#FFFFFF" borderColor="white" fontSize="lg" fontWeight="800" size="md" onPress={() => props.navigation.navigate('MedicalInfo')}>
                <Text bold style={{ color: 'white' }}>Get Started</Text>
                </Button>
            </Box>
        </Flex>
    )
}