import { Heading, HStack, View, VStack, Text, Progress, Box, Circle, ChevronLeftIcon, SunIcon, ChevronRightIcon, ScrollView } from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, XAxis, YAxis, Grid, AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Dimensions } from "react-native";
import * as scale from 'd3-scale'
import Svg, { Defs, G, LinearGradient, Stop, Image, Rect, Text as SvgText } from "react-native-svg";
import Octicons from "react-native-vector-icons/Octicons";

export default function WakeUpDetailScreen(props) {

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

    const dataSetArea = [
        {
            date: new Date(2000, 0, 1, 0, 0),
            value: 10
        },
        {
            date: new Date(2000, 0, 1, 6, 0),
            value: 50
        },
        {
            date: new Date(2000, 0, 1, 8, 0),
            value: 0
        },
        {
            date: new Date(2000, 0, 1, 12, 0),
            value: 60
        },
        {
            date: new Date(2000, 0, 1, 18, 0),
            value: 40
        }];

    const contentInset = { top: 10, bottom: 10 };

    const data1 = [
        // { startTime: new Date(2018, 0, 0, 0, 0).getTime(), endTime: new Date(2018, 0, 0, 6, 0).getTime(), color: 'rgba(134, 65, 244, 0.2)' },
        { startTime: new Date(2018, 0, 0, 7, 18).getTime(), endTime: new Date(2018, 0, 0, 18, 7).getTime(), color: 'rgba(134, 65, 244, 0.2)', startDateTime: new Date(2018, 0, 0, 7, 18), endDateTime: new Date(2018, 0, 0, 23, 7) },
    ];

    const startTime = new Date(new Date(2018, 0, 0, 0, 0)).getTime(); // Adjust your start time
    const endTime = new Date(new Date(2018, 0, 0, 23, 59)).getTime();

    const sleepCoordinates = [0, '-15 min', new Date(data1[0].startDateTime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }), new Date(data1[0].endDateTime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }), '+1 hr'];

    const BarChart = ({ startTime, endTime, data, width, height }) => {
        const timeRange = endTime - startTime;
        return (
            <View style={{ width: Dimensions.get('screen').width - 30, position: 'absolute', bottom: 0, right: 0, left: 0 }}>
                {/* <Box ml={55}> */}

                {/* </Box> */}
                <Svg width={width} height={height}>
                    {data.map((item, index) => {
                        const xStart = ((item.startTime - startTime) / timeRange) * width;
                        const xEnd = ((item.endTime - startTime) / timeRange) * width;
                        const barWidth = xEnd - xStart;
                        // const y = height - 20; // Adjust the Y position as needed

                        return (
                            <G key={index} >
                                <Rect
                                    key={index}
                                    x={xStart}
                                    // y={y}
                                    width={barWidth}
                                    height={150} // Adjust the bar height as needed
                                    fill={item.color} // Customize the bar color
                                />
                                {/* <ChevronLeftIcon size="4" color="#A076F9" /> */}
                                {/* <Octicons color="black" name="moon" size={20}></Octicons> */}
                            </G>
                        );
                    })}
                    <Octicons color="black" name="moon" size={20}></Octicons>
                </Svg>
            </View>
        );
    };

    return (
        <>
            <View flex={1} h="100%" w="100%" backgroundColor="#ffff" color="#ffff">
                <View backgroundColor="#fff" px={3}>
                    <HStack mt={2}>
                        <VStack mt={4} mr={1}>
                            <ChevronLeftIcon size="4" color="black" onPress={() => props.navigation.navigate('Sleep')} />
                            {/* <MaterialCommunityIcons name="calendar" size={16}></MaterialCommunityIcons> */}
                        </VStack>
                        <VStack>
                            <Circle size="30px" bg="#d5b8ff" mt={2} mr={3}>
                                <SunIcon size="5" />
                                {/* <MaterialCommunityIcons name="moon" size={16}></MaterialCommunityIcons> */}
                            </Circle>
                        </VStack>
                        <VStack space={1} mt={1}>
                            <Text bold fontSize="sm" color="black">
                                Wake Up Performance
                            </Text>
                            <Text color="gray.400" fontSize="xs">
                                8:00 PM - 9:00 PM
                            </Text>
                        </VStack>
                    </HStack>
                </View>
                <ScrollView keyboardShouldPersistTaps="handled" >
                    <View style={{ height: 190, flexDirection: 'row', backgroundColor: "#fff" }}>
                        <YAxis
                            data={dataSetArea}
                            yAccessor={({ item }) => item.value}
                            style={{ width: 30 }}
                            numberOfTicks={4}
                            contentInset={contentInset}
                            svg={{ fill: 'grey', fontSize: 9 }}
                        />

                        <View style={{ flex: 1 }}>
                            <AreaChart
                                style={{ flex: 1, width: Dimensions.get('screen').width - 30 }}
                                data={dataSetArea}
                                yAccessor={({ item }) => item.value}
                                svg={{ stroke: 'rgb(65, 226, 244)', fill: 'url(#linegradient)' }}
                                contentInset={{ top: 10, bottom: 1 }}
                                curve={shape.curveCardinal.tension(0.2)}
                                xScale={scale.scaleTime}>
                                {lineGradient}
                            </AreaChart>
                            <BarChart
                                startTime={startTime}
                                endTime={endTime}
                                data={data1}
                                width={Dimensions.get('screen').width - 30} // Adjust the width as needed
                                height={170} // Adjust the height as needed
                            />
                            <XAxis
                                style={{ marginHorizontal: -15, height: 20 }}
                                data={dataSetArea}
                                scale={scale.scaleTime}
                                //xAccessor={({ item }) => item.date}
                                formatLabel={(value, index) => sleepCoordinates[index]}
                                //formatLabel={(value, index) => dataSetArea[index].date.getHours() % 6 === 0 ? dataSetArea[index].date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                contentInset={{ left: 20, right: 30 }}
                                svg={{
                                    fill: 'grey',
                                    fontSize: 8,
                                    fontWeight: '500',
                                    originY: 30,
                                    y: 5,
                                }}
                            />
                        </View>
                    </View>
                    {/* <View style={{ height: 220, flexDirection: 'row', backgroundColor: "#fff" }} px={3}>
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
                            </BarChart>

                            <XAxis
                                style={{ marginHorizontal: -10, width: Dimensions.get('screen').width - 30 }}
                                data={XAxisCoordinates}
                                formatLabel={(value, index) => XAxisCoordinates[index]}
                                contentInset={{ left: 20, right: 10 }}
                                svg={{ fontSize: 10, fill: 'black' }}
                            />
                        </View>
                    </View> */}
                    <View h="100%" w="100%" px={3} style={{ backgroundColor: "#ffffff" }}>
                        <HStack justifyContent="space-evenly" py={2} flexDirection="row" backgroundColor="white">
                            <VStack>
                                <Text color="primary.600" fontWeight="500" fontSize="xs">AVG BG</Text>
                                <Text fontSize="xs" color="gray.400">160 mg/dl</Text>
                            </VStack>
                            <VStack>
                                <Text color="#A076F9" fontWeight="500" fontSize="xs">SLEEP</Text>
                                <Text fontSize="xs" color="gray.400">7h 30m</Text>
                            </VStack>
                        </HStack>
                        <HStack space={2.5} alignItems="center" mt={5}>
                            <Heading color="black" fontSize="md">Glucose</Heading>
                        </HStack>
                        <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <View flexDirection="row">
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="sm" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={9}>
                                        -05 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        15m Before
                                    </Text>
                                </VStack>
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="sm" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={9}>
                                        +20 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        During
                                    </Text>
                                </VStack>
                                <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="sm" isTruncated>60</Heading>
                                    <Text color="black" isTruncated fontSize={9}>
                                        +75 BG
                                    </Text>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        1hr After
                                    </Text>
                                </VStack>
                            </View>
                            <Progress size="xs" mb={1} _filledTrack={{
                                bg: "#e40063"
                            }} backgroundColor="gray.100" value={20} />
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
                                        <Heading color="black" fontSize="sm" isTruncated>60<Text color="gray.400" ml={3} fontSize={9}>%</Text></Heading>
                                        <Text color="gray.400" isTruncated fontSize={9}>
                                            Time in Range
                                        </Text>
                                    </VStack>
                                    <VStack w="30%" px={2} py={2} pt={3} justifyContent="start" alignItems="center">
                                        <ChevronRightIcon size="3" color="black" />
                                    </VStack>
                                </View>
                            </Box>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="100%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="sm" isTruncated>----</Heading>
                                        <Text color="gray.400" isTruncated fontSize={9}>
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
                                        <Heading color="black" fontSize="sm" isTruncated>70<Text color="gray.400" ml={3} fontSize={9}>mg/dl</Text></Heading>
                                        <Text color="gray.400" isTruncated fontSize={9}>
                                            Highest
                                        </Text>
                                    </VStack>
                                </View>
                            </Box>
                            <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <View flexDirection="row">
                                    <VStack w="100%" pl={3} py={2} space={0.5}>
                                        <Heading color="black" fontSize="sm" mr={3} isTruncated>60<Text color="gray.400" fontSize={9}>mg/dl</Text></Heading>
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