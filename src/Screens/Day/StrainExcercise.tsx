import { Box, Circle, Heading, HStack, Progress, ScrollView, Text, View, VStack } from "native-base";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function StrainExcercise(props: any) {

    return(
        <View h="100%" w="100%" pt={3} px={3} style={{ backgroundColor: "#ffffff" }}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <HStack alignItems="center" space={2}>
        <Circle size="30px" bg="#E5EFD7">
                <MaterialCommunityIcons name="heart" color="#81A862" size={18}></MaterialCommunityIcons>
        </Circle>
        <Heading color="#81A862" fontSize="sm">Strain & Excercise</Heading>
        </HStack>
        <HStack space={3} pr={3}>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                    <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>60&nbsp;<Text color="gray.400" fontSize={7}>%</Text></Heading>
                            <Text color="gray.500" isTruncated fontSize={9}>
                               Avg. Daily Calories
                            </Text>
                        </VStack>
                    </View>
                </Box>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="lg" isTruncated>1 h 40 m</Heading>
                            <Text color="gray.500" isTruncated fontSize={9}>
                                Avg. Workout Time
                            </Text>
                        </VStack>
                    </View>
                </Box>
        </HStack>
        <HStack space={3} pr={3}>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                    <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>60&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                            <Text color="gray.500" isTruncated fontSize={9}>
                               Avg. Heart Rate
                            </Text>
                        </VStack>
                    </View>
                </Box>
                <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                        <VStack w="100%" pl={3} py={2} space={0.5}>
                            <Heading color="black" fontSize="md" isTruncated>70&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                            <Text color="gray.500" isTruncated fontSize={9}>
                                Avg. Max Heart Rate
                            </Text>
                        </VStack>
                    </View>
                </Box>
        </HStack>
        <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
            <View flexDirection="row">
                <HStack w="80%">
                    <View pl={4} py={4} justifyContent="center">
                        <Circle size={30} bg="#E5EFD7">
                            <MaterialCommunityIcons name="run" color="#81A862" size={20}></MaterialCommunityIcons>
                        </Circle>
                    </View>
                    <VStack px={2} py={4} space={0.5}>
                        <Heading color="black" fontSize="sm" isTruncated>Outdoor Run</Heading>
                        <Text color="gray.500" isTruncated fontSize={10}>
                            12:00 - 1:00 PM
                        </Text>
                    </VStack>
                </HStack>
                <HStack w="20%" py={4}>
                    <Text fontSize={13} color="#2dc6c6" onPress={() => props.navigation.navigate('OutdoorDetails')}>
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

        <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
            <View flexDirection="row">
                <HStack w="80%">
                    <View pl={4} py={4} justifyContent="center">
                        <Circle size={30} bg="#E5EFD7">
                            <MaterialCommunityIcons name="run" color="#81A862" size={21}></MaterialCommunityIcons>
                        </Circle>
                    </View>
                    <VStack px={2} py={4} space={0.5}>
                        <Heading color="black" fontSize="sm" isTruncated>Weight Lifting</Heading>
                        <Text color="gray.500" isTruncated fontSize={10}>
                            12:00 - 1:00 PM
                        </Text>
                    </VStack>
                </HStack>
                <HStack w="20%" py={4}>
                    <Text fontSize={13} color="#2dc6c6">
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
            <Progress size="xs" mb={1} mt={2.5} backgroundColor="gray.100" value={90} />
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