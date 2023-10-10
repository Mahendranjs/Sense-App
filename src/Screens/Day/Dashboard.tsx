import { Avatar, Flex, Heading, HStack, Pressable, View, VStack, Text, Progress, Box, Circle, SimpleGrid, Stack } from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Dashboard() {
    return (
        <View h="100%" w="100%" px={3} style={{ backgroundColor: "#ffffff" }}>
            <HStack space={2.5} alignItems="center">
                <Circle size="25px" bg="#e4f6f3">
                    <MaterialCommunityIcons name="water" color="#2dc6c6" size={18}></MaterialCommunityIcons>
                </Circle>
                <Heading color="primary.600" fontSize="sm">Glucose</Heading>
            </HStack>
            <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                    <VStack w="80%" pl={3} py={3} space={0.5}>
                        <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                        <Text color="gray.400" isTruncated fontSize={9}>
                            Glucose Performance Score
                        </Text>
                    </VStack>
                    <VStack w="20%" px={1} py={2} justifyContent="start" alignItems="flex-end">
                        <Text fontSize={13} color="#2dc6c6">
                            Details <MaterialIcons name="arrow-forward-ios" color="#2dc6c6" size={9}></MaterialIcons>
                        </Text>
                    </VStack>
                </View>
                <Progress size="xs" mb={1} color="#2dc6c6" backgroundColor="gray.100" value={45} />
                <View w="100%" px={2} mb={3} flexDirection="row">
                    <View w="50%">
                        <Text color="gray.400" textAlign="left" fontSize={9}>Low Control</Text>
                    </View>
                    <View w="50%">
                        <Text color="gray.400" textAlign="right" fontSize={9}>High Control</Text>
                    </View>
                </View>
            </Box>
            <HStack space={3} pr={3}>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                    <View flexDirection="row">
                        <VStack w="70%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>60<Text color="gray.400" ml={3} fontSize={7}>%</Text></Heading>
                            <Text color="gray.400" isTruncated fontSize={9}>
                                Time in Range
                            </Text>
                        </VStack>
                        <VStack w="30%" px={2} py={2} pt={3} justifyContent="start" alignItems="center">
                            <MaterialIcons name="arrow-forward-ios" color="black" size={11}></MaterialIcons>
                        </VStack>
                    </View>
                </Box>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                    <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>High</Heading>
                            <Text color="gray.400" isTruncated fontSize={9}>
                                Votality
                            </Text>
                        </VStack>
                    </View>
                </Box>
            </HStack>
            <HStack space={3} pr={3}>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                    <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>70<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                            <Text color="gray.400" isTruncated fontSize={9}>
                                Highest
                            </Text>
                        </VStack>
                    </View>
                </Box>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>60<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                            <Text color="gray.400" isTruncated fontSize={9}>
                                Lowest
                            </Text>
                        </VStack>
                    </View>
                </Box>
            </HStack>

        </View>
    )
}