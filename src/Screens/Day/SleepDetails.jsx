import { Heading, HStack, View, VStack, Text, Progress, Box, Circle, ChevronLeftIcon, MoonIcon, ChevronRightIcon, ScrollView } from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, XAxis, YAxis, Grid, G, StackedBarChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Dimensions } from "react-native";
import { LinearGradient, Stop, Defs } from 'react-native-svg';

export default function SleepDetailScreen(props) {
    const dataSet = [0, 150, 110, 0]
    const XAxisCoordinates = ['12am', '6am', '12pm', '6pm'];

    const dataBar = [0, 100, 0, 0];
    const awakeData = [0, 100, 0, 0];
    const lightData = [0, 100, 0, 0];
    const remData = [0, 100, 0, 0];
    const deepData = [0, 100, 0, 0];
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



    const CustomBarDecorator = ({ x, y, data }) => {
        console.log('data')
        return data.map((value, index) => (
            <G key={index}>
                <ChevronLeftIcon size={55} color="black" style={{ position: 'absolute' }} />
            </G>
        ));
    };

    const data = [
        {
            data: [0, 4, 8, 3, 0],
            // svg: { fill: 'color1' },
        },
        {
            data: [0, 4, 8, 3, 0],
            // svg: { fill: 'color2' },
        },
        // Add more data series as needed
    ];

    const colors = ["rgb(134, 65, 244)", "rgb(244, 209, 66)", "rgb(66, 244, 105)"];
    const keys = ["apples", "bananas", "oranges"];

    return (
        <>
            <View backgroundColor="#fff" px={3}>
                <HStack mt={2}>
                    <VStack mt={4} mr={3}>
                        <ChevronLeftIcon size="5" color="black" onPress={() => props.navigation.navigate('Sleep')}/>
                        {/* <MaterialCommunityIcons name="calendar" size={16}></MaterialCommunityIcons> */}
                    </VStack>
                    <VStack>
                        <Circle size="40px" bg="#d5b8ff" mt={2} mr={3}>
                            <MoonIcon size="5" />
                            {/* <MaterialCommunityIcons name="moon" size={16}></MaterialCommunityIcons> */}
                        </Circle>
                    </VStack>
                    <VStack space={1} mt={1}>
                        <Text bold fontSize="md" color="black">
                            Sleep
                        </Text>
                        <Text color="gray.400">
                            8:00 PM - 9:00 PM
                        </Text>
                    </VStack>
                </HStack>
            </View>
            <ScrollView keyboardShouldPersistTaps="handled" >
                <View style={{ height: 230, flexDirection: 'row', backgroundColor: "#fff" }} px={3}>
                    <YAxis
                        data={dataSet}
                        style={{ width: 30 }}
                        numberOfTicks={4}
                        contentInset={{ top: 30, bottom: 30 }}
                        svg={{ fill: 'grey', fontSize: 10 }}
                        formatLabel={(value, index) => String(value)}
                    />

                    <View style={{ flex: 1 }}>
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
                            <Heading color="#830780" fontSize="sm">SLEEP</Heading>
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
                    <Heading color="black" fontSize="md" mt={4} mb={4}>Activity Details</Heading>
                    <Box borderColor="coolGray.200" borderWidth="1" mb={4}>

                    </Box>
                    <Box mb={4} borderColor="coolGray.200" borderWidth="1">
                        <VStack>
                            <Heading px={2} mb={6} mt={4} color="black" fontSize="md">Sleep Breakdown</Heading>
                            <View w="100%" px={2} mb={2} flexDirection="row">
                                <View w="50%">
                                    <Text color="black" bold textAlign="left" fontSize={14}>Total Sleep Time</Text>
                                </View>
                                <View w="50%">
                                    <Text color="black" bold textAlign="right" fontSize={14}>00</Text>
                                </View>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#830780"
                            }} backgroundColor="gray.100" value={45} />
                            <View w="100%" px={2} mb={4} mt={4} flexDirection="row">
                                <View w="50%">
                                    <Text color="black" bold textAlign="left" fontSize={14}>Time Awake</Text>
                                </View>
                                <View w="50%">
                                    <Text color="black" bold textAlign="right" fontSize={14}>00</Text>
                                </View>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#830780"
                            }} backgroundColor="gray.100" value={45} />
                            <View w="100%" px={2} mb={4} mt={4} flexDirection="row">
                                <View w="50%">
                                    <Text color="black" bold textAlign="left" fontSize={14}>Slow Wave Sleep</Text>
                                </View>
                                <View w="50%">
                                    <Text color="black" bold textAlign="right" fontSize={14}>00</Text>
                                </View>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#830780"
                            }} backgroundColor="gray.100" value={45} />
                            <View w="100%" px={2} mb={4} mt={4} flexDirection="row">
                                <View w="50%">
                                    <Text color="black" bold textAlign="left" fontSize={14}>REM Sleep</Text>
                                </View>
                                <View w="50%">
                                    <Text color="black" bold textAlign="right" fontSize={14}>00</Text>
                                </View>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#830780"
                            }} backgroundColor="gray.100" value={45} />
                            <View w="100%" px={2} mb={4} mt={4} flexDirection="row">
                                <View w="50%">
                                    <Text color="black" bold textAlign="left" fontSize={14}>Cycle Count</Text>
                                </View>
                                <View w="50%">
                                    <Text color="black" bold textAlign="right" fontSize={14}>00</Text>
                                </View>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#830780"
                            }} backgroundColor="gray.100" value={45} />
                        </VStack>
                    </Box>
                </View>
            </ScrollView>
        </>
    )
}