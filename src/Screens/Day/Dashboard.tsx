import { Heading, HStack, View, VStack, Progress, Box, Circle, Text, ScrollView } from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, XAxis, YAxis, AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Dimensions } from "react-native";
import Svg, { Defs, G, LinearGradient, Stop, Image, Rect, Text as SvgText } from "react-native-svg";
import * as scale from 'd3-scale'

export default function Dashboard() {
    const contentInset = { top: 10, bottom: 10 };
    const data1 = [
        { startTime: new Date(2018, 0, 0, 0, 0).getTime(), endTime: new Date(2018, 0, 0, 6, 0).getTime(), color: 'rgba(134, 65, 244, 0.2)' },
        { startTime: new Date(2018, 0, 0, 7, 0).getTime(), endTime: new Date(2018, 0, 0, 8, 0).getTime(), color: 'rgba(226, 240, 217, 0.5)' },
        { startTime: new Date(2018, 0, 0, 23, 0).getTime(), endTime: new Date(2018, 0, 0, 23, 59).getTime(), color: 'rgba(134, 65, 244, 0.2)' },
    ];

    const startTime = new Date(new Date(2018, 0, 0, 0, 0)).getTime(); // Adjust your start time
    const endTime = new Date(new Date(2018, 0, 0, 23, 59)).getTime();

    const data = [
        {
            value: 70,
            date: new Date(2018, 0, 0, 0, 0),
        },
        {
            value: 125,
            date: new Date(2018, 0, 0, 6, 0),
        },
        {
            value: 70,
            date: new Date(2018, 0, 0, 12, 0),
        },
        {
            value: 140,
            date: new Date(2018, 0, 0, 18, 0),
        },
        {
            value: 10,
            date: new Date(2018, 0, 0, 23, 59),
        }
    ]

    const Gradient = () => (
        <G>
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgba(92,210,231,1)'} />
                    <Stop offset={'100%'} stopColor={'rgba(255,255,255,1)'} />
                </LinearGradient>
            </Defs>
        </G>
    )

    const BarChart = ({ startTime, endTime, data, width, height }) => {
        const timeRange = endTime - startTime;
        return (
            <View style={{ width: Dimensions.get('screen').width - 30, position: 'absolute', bottom: 0, right: 0, left: 0 }}>
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
                            </G>
                        );
                    })}
                </Svg>
            </View>
        );
    };

    return (
        <>
            <ScrollView backgroundColor="#fff" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{ height: 190, flexDirection: 'row', backgroundColor: "#fff" }}>
                    <YAxis
                        data={data}
                        style={{ width: 30 }}
                        numberOfTicks={4}
                        yAccessor={({ item }) => item.value}
                        contentInset={contentInset}
                        svg={{ fill: 'grey', fontSize: 10 }}
                    />

                    <View style={{ flex: 1 }}>
                        <AreaChart
                            style={{ flex: 1, width: Dimensions.get('screen').width - 30 }}
                            data={data}
                            yAccessor={({ item }) => item.value}
                            xAccessor={({ item }) => item.date.getTime()}
                            xScale={scale.scaleTime}
                            contentInset={{ top: 10, bottom: 4 }}
                            svg={{ stroke: 'rgb(65, 226, 244)', fill: 'url(#gradient)' }}
                            curve={shape.curveCardinal.tension(0.2)}
                        >
                            <Gradient />
                        </AreaChart>
                        <BarChart
                            startTime={startTime}
                            endTime={endTime}
                            data={data1}
                            width={Dimensions.get('screen').width - 30} // Adjust the width as needed
                            height={170} // Adjust the height as needed
                        />
                        {/* <BarChart
                            style={{width:Dimensions.get('screen').width - 30, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
                            data={data}
                            yAccessor={({ item }) => item.value}
                            xAccessor={({ item }) => item.date.getTime()}
                             animate={true}
                            numberOfTicks={2}
                            svg={{ fill: 'rgba(255, 0, 0, 0.3)',  fillOpacity:1 }}
                            contentInset={{ left: 10, right: 25,top:0,bottom:20 }}
                            curve={shape.curveCardinal.tension(0.2)}
                            xScale={scale.scaleTime}
                        /> */}
                        <XAxis
                            data={data}
                            svg={{
                                fill: 'grey',
                                fontSize: 8,
                                fontWeight: '500',
                                originY: 30,
                                y: 5,
                            }}
                            xAccessor={({ item }) => item.date.getTime()}
                            scale={scale.scaleTime}
                            numberOfTicks={4}
                            style={{ marginHorizontal: -15, height: 20 }}
                            contentInset={{ left: 20, right: 30 }}
                            formatLabel={(value, index) => data[index].date.getHours() % 6 === 0 ? data[index].date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                        />
                    </View>
                </View>
                <HStack px={3} justifyContent="space-evenly" py={2} flexDirection="row" backgroundColor="white">
                    <VStack>
                        <Text color="primary.600" fontWeight="500" fontSize="xs">AVG BG</Text>
                        <Text fontSize="xs" color="gray.400">160 mg/dl</Text>
                    </VStack>
                    <VStack>
                        <Text color="#A076F9" fontWeight="500" fontSize="xs">SLEEP</Text>
                        <Text fontSize="xs" color="gray.400">7h 30m</Text>
                    </VStack>
                    <VStack>
                        <Text color="#96C291" fontWeight="500" fontSize="xs">EXERCISE</Text>
                        <Text fontSize="xs" color="gray.400">1h 0m</Text>
                    </VStack>
                </HStack>
                <View h="100%" w="100%" pt={3} px={3} style={{ backgroundColor: "#ffffff" }}>
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
                        <Progress size="xs" mb={1} color="#2dc6c6" backgroundColor="gray.100" value={70} />
                        <View w="100%" px={2} mb={3} flexDirection="row">
                            <View w="50%">
                                <Text color="gray.400" textAlign="left" fontSize={10}>Low Control</Text>
                            </View>
                            <View w="50%">
                                <Text color="gray.400" textAlign="right" fontSize={10}>High Control</Text>
                            </View>
                        </View>
                    </Box>
                    <HStack space={3} pr={3}>
                        <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <View flexDirection="row">
                                <VStack w="70%" pl={3} py={2} space={0.5}>
                                    <Heading color="black" fontSize="md" isTruncated>60&nbsp;<Text color="gray.400" ml={3} fontSize={7}>%</Text></Heading>
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
                                    <Heading color="black" fontSize="md" isTruncated>70&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        Highest
                                    </Text>
                                </VStack>
                            </View>
                        </Box>
                        <Box w="50%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <View flexDirection="row">
                                <VStack w="100%" pl={3} py={2} space={0.5}>
                                    <Heading color="black" fontSize="md" isTruncated>60&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        Lowest
                                    </Text>
                                </VStack>
                            </View>
                        </Box>
                    </HStack>
                </View>
            </ScrollView>
        </>
    )
}