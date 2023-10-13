import { Box, Circle, Heading, HStack, Progress, ScrollView, Text, View, VStack } from "native-base";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons"

export default function Sleep(props: any) {

    return(
        <View h="100%" w="100%" pt={3} px={3} style={{ backgroundColor: "#ffffff" }}>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <HStack alignItems="center" space={2}>
            <Circle size="30px" bg="#E2CBF8">
                    <MaterialCommunityIcons name="heart" color="#5900CC" size={18}></MaterialCommunityIcons>
            </Circle>
            <Heading color="#5900CC" fontSize="sm">Recovery & Sleep</Heading>
            </HStack>
            <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                    <VStack w="100%" pl={3} py={3} space={0.5}>
                        <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                        <Text color="gray.500" isTruncated fontSize={9}>
                            Recovery Score
                        </Text>
                    </VStack>
                </View>
            </Box>
            <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                    <HStack w="80%">
                        <View pl={4} py={4} justifyContent="center">
                            <Circle size={30} bg="#E2CBF8">
                                <Octicons name="moon" color="#5900CC" size={20}></Octicons>
                            </Circle>
                        </View>
                        <VStack px={2} py={4} space={0.5}>
                            <Heading color="black" fontSize="sm" isTruncated>Sleep</Heading>
                            <Text color="gray.500" isTruncated fontSize={10}>
                                12:00 - 1:00 PM
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack w="20%" py={4}>
                        <Text fontSize={13} color="#2dc6c6" onPress={() => props.navigation.navigate('SleepDetails')}>
                            Details <MaterialIcons name="arrow-forward-ios" color="#2dc6c6" size={9}></MaterialIcons>
                        </Text>
                    </HStack>
                </View>
                <HStack px={1} justifyContent="space-around" py={2} flexDirection="row" backgroundColor="white">
                    <VStack alignItems="center">
                        <Heading color="black" pb={1} fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">-05 BG</Text>
                        <Text fontSize="xs" color="gray.400">15m Before</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Heading color="black" pb={1}  fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">+20 BG</Text>
                        <Text fontSize="xs" color="gray.400">During</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Heading color="black" pb={1}  fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">+75 BG</Text>
                        <Text fontSize="xs" color="gray.400">1h After</Text>
                    </VStack>
                </HStack>
                <Progress size="xs" mb={1} mt={2.5} color="#2dc6c6" backgroundColor="gray.100" value={80} />
                <View w="100%" px={2} mb={3} flexDirection="row">
                    <View w="50%">
                        <Text color="gray.400" textAlign="left" fontSize={10}>Low Control</Text>
                    </View>
                    <View w="50%">
                        <Text color="gray.400" textAlign="right" fontSize={10}>High Control</Text>
                    </View>
                </View>
            </Box>

            <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                    <HStack w="80%">
                        <View pl={4} py={4} justifyContent="center">
                            <Circle size={30} bg="#E2CBF8">
                                <Entypo name="light-down" color="#5900CC" size={21}></Entypo>
                            </Circle>
                        </View>
                        <VStack px={2} py={4} space={0.5}>
                            <Heading color="black" fontSize="sm" isTruncated>Wake Up</Heading>
                            <Text color="gray.500" isTruncated fontSize={10}>
                                12:00 - 1:00 PM
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack w="20%" py={4}>
                        <Text fontSize={13} color="#2dc6c6" onPress={() => props.navigation.navigate('WakeUpDetails')}>
                            Details <MaterialIcons name="arrow-forward-ios" color="#2dc6c6" size={9}></MaterialIcons>
                        </Text>
                    </HStack>
                </View>
                <HStack px={1} justifyContent="space-around" py={2} flexDirection="row" backgroundColor="white">
                    <VStack alignItems="center">
                        <Heading color="black" pb={1} fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">-05 BG</Text>
                        <Text fontSize="xs" color="gray.400">15m Before</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Heading color="black" pb={1}  fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">+20 BG</Text>
                        <Text fontSize="xs" color="gray.400">During</Text>
                    </VStack>
                    <VStack alignItems="center">
                        <Heading color="black" pb={1}  fontSize="xl" isTruncated>60</Heading>
                        <Text fontSize="xs" color="black">+75 BG</Text>
                        <Text fontSize="xs" color="gray.400">1h After</Text>
                    </VStack>
                </HStack>
                <Progress size="xs" mb={1} mt={2.5} _filledTrack={{ bg:"danger.600"}} backgroundColor="gray.100" value={20} />
                <View w="100%" px={2} mb={3} flexDirection="row">
                    <View w="50%">
                        <Text color="gray.400" textAlign="left" fontSize={10}>Low Control</Text>
                    </View>
                    <View w="50%">
                        <Text color="gray.400" textAlign="right" fontSize={10}>High Control</Text>
                    </View>
                </View>
            </Box>
            </ScrollView>
        </View>
    )

}