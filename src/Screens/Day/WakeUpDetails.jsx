import { Heading, HStack, View, VStack, Text, Progress, Box, Circle, ChevronLeftIcon, SunIcon, ChevronRightIcon, ScrollView } from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, XAxis, YAxis, Grid, G } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Dimensions } from "react-native";
import { LinearGradient, Stop, Defs } from 'react-native-svg';

export default function WakeUpDetailScreen(props) {
    const dataSet = [0, 200, 110, 200, 190, 0]
    const XAxisCoordinates = ['12am', '6am', '12pm', '6pm'];

    const dataBar = [0, 100, 0, 0];
    const contentInset = { top: 0, bottom: 14 };

    const lineGradient = (
        <Defs key={'linegradient'}>
            <LinearGradient id={'linegradient'}>
                <Stop offset={'0%'} stopColor={'rgba(92,210,231,0.1)'} />
                <Stop offset={'100%'} stopColor={'rgba(255,255,255,0.2)'} />
            </LinearGradient>
        </Defs>
    );

    const barGradient = (
        <Defs key={'bargradient'}>
            <LinearGradient id={'bargradient'}>
                <Stop offset={'0%'} stopColor={'rgba(213,184,255,1)'} />
                <Stop offset={'100%'} stopColor={'rgba(255,255,255,1)'} />
            </LinearGradient>
        </Defs>
    );

    return (
        <>
            <View flex={1} h="100%" w="100%" backgroundColor="#ffff" color="#ffff">
                <View backgroundColor="#fff" px={3}>
                    <HStack mt={2}>
                        <VStack mt={4} mr={3}>
                            <ChevronLeftIcon size="5" color="black" onPress={() => props.navigation.navigate('Sleep')} />
                            {/* <MaterialCommunityIcons name="calendar" size={16}></MaterialCommunityIcons> */}
                        </VStack>
                        <VStack>
                            <Circle size="40px" bg="#d5b8ff" mt={2} mr={3}>
                                <SunIcon size="5" />
                                {/* <MaterialCommunityIcons name="moon" size={16}></MaterialCommunityIcons> */}
                            </Circle>
                        </VStack>
                        <VStack space={1} mt={1}>
                            <Text bold fontSize="md" color="black">
                                Wake Up Performance
                            </Text>
                            <Text color="gray.400">
                                8:00 PM - 9:00 PM
                            </Text>
                        </VStack>
                    </HStack>
                </View>
                <ScrollView keyboardShouldPersistTaps="handled" >

                    <View style={{ height: 220, flexDirection: 'row', backgroundColor: "#fff" }} px={3}>
                        <YAxis
                            data={dataSet}
                            style={{ width: 30 }}
                            numberOfTicks={4}
                            contentInset={{ top: 30, bottom: 30 }}
                            svg={{ fill: 'grey', fontSize: 10 }}
                            formatLabel={(value, index) => String(value)}
                        />

                        <View style={{ flex: 1 }} mt={4}>
                            <LineChart
                                style={{ flex: 1, width: Dimensions.get('screen').width - 30 }}
                                data={dataSet}
                                svg={{ fill: 'url(#linegradient)' }}
                                curve={shape.curveCardinal.tension(0.2)}>
                                {lineGradient}
                            </LineChart>

                            <BarChart
                                style={{ flex: 1, width: Dimensions.get('screen').width - 30, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
                                data={dataBar}
                                contentInset={contentInset}
                                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}>
                                {/* {barGradient} */}
                                {/* {({ x, y, data }) => CustomBarDecorator({ x, y, data })} */}
                            </BarChart>

                            <XAxis
                                style={{ marginHorizontal: -10, width: Dimensions.get('screen').width - 30 }}
                                data={XAxisCoordinates}
                                formatLabel={(value, index) => XAxisCoordinates[index]}
                                contentInset={{ left: 20, right: 10 }}
                                svg={{ fontSize: 10, fill: 'black' }}
                            />
                        </View>
                    </View>
                    <View h="100%" w="100%" px={3} style={{ backgroundColor: "#ffffff" }}>
                        <View flexDirection="row" mt={5}>
                            <VStack alignItems="center">
                                <Heading color="primary.500" fontSize="sm">AVG.BG</Heading>
                                <Text color="gray.400">160 mg/dl</Text>
                            </VStack>
                            <VStack w="30%" alignItems="center">
                                <Heading color="#830780" fontSize="sm">WAKE UP</Heading>
                                <Text color="gray.400">7h 30m</Text>
                            </VStack>
                        </View>
                        <HStack space={2.5} alignItems="center" mt={5}>
                            <Heading color="black" fontSize="md">Glucose</Heading>
                        </HStack>
                        <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <View flexDirection="row">
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={15}>
                                        -05 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={12}>
                                        15m Before
                                    </Text>
                                </VStack>
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={15}>
                                        +20 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={12}>
                                        During
                                    </Text>
                                </VStack>
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={15}>
                                        +75 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={12}>
                                        1hr After
                                    </Text>
                                </VStack>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#e40063"
                            }} backgroundColor="gray.100" value={20} />
                            <View w="100%" px={2} mb={3} flexDirection="row">
                                <View w="50%">
                                    <Text color="gray.400" textAlign="left" fontSize={12}>Low Control</Text>
                                </View>
                                <View w="50%">
                                    <Text color="gray.400" textAlign="right" fontSize={12}>High Control</Text>
                                </View>
                            </View>
                        </Box>
                        <HStack space={3} pr={3}>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="70%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="md" isTruncated>60<Text color="gray.400" ml={3} fontSize={9}>%</Text></Heading>
                                        <Text color="gray.400" isTruncated fontSize={12}>
                                            Time in Range
                                        </Text>
                                    </VStack>
                                    <VStack w="30%" px={2} py={2} pt={3} justifyContent="start" alignItems="center">
                                        <ChevronRightIcon size="5" color="black" />
                                    </VStack>
                                </View>
                            </Box>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="100%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="md" isTruncated>----</Heading>
                                        <Text color="gray.400" isTruncated fontSize={12}>
                                            Post Activity Impact
                                        </Text>
                                    </VStack>
                                </View>
                            </Box>
                        </HStack>
                        <HStack space={3} pr={3}>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="100%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="md" isTruncated>70<Text color="gray.400" ml={3} fontSize={9}>mg/dl</Text></Heading>
                                        <Text color="gray.400" isTruncated fontSize={12}>
                                            Highest
                                        </Text>
                                    </VStack>
                                </View>
                            </Box>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="100%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="md" mr={3} isTruncated>60<Text color="gray.400" fontSize={9}>mg/dl</Text></Heading>
                                        <Text color="gray.400" isTruncated fontSize={12}>
                                            Lowest
                                        </Text>
                                    </VStack>
                                </View>
                            </Box>
                        </HStack>
                    </View>

                </ScrollView>
            </View>
        </>
    )
}