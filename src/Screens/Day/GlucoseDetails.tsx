import { Box, Circle, Heading, HStack, Progress, ScrollView, Text, View, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import Svg, { Defs, G, LinearGradient, Rect, Stop } from "react-native-svg";
import { AreaChart, XAxis, YAxis } from "react-native-svg-charts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as scale from 'd3-scale'
import * as shape from 'd3-shape';

export default function GlucoseDetails(props: any) {
    const contentInset = { top: 10, bottom: 20 };
    const data = [
        {
            value: 70,
            date: new Date(2018, 0, 0, 0, 0),
        },
        {
            value: 125,
            date: new Date(2018, 0, 0, 3, 0),
        },
        {
            value: 134,
            date: new Date(2018, 0, 0, 4, 0),
        },
        {
            value: 135,
            date: new Date(2018, 0, 0, 5, 0),
        },
        {
            value: 125,
            date: new Date(2018, 0, 0, 6, 0),
        },
        {
            value: 17,
            date: new Date(2018, 0, 0, 8, 0),
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
            value: 30,
            date: new Date(2018, 0, 0, 23, 55),
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

    const BarChart = ({ data, height, width }) => {
        const chartWidth = width // Adjust the chart width as needed
        const maxValue = Math.max(...data.map(item => item.value));
        const numHours = 24;
        const barWidth = chartWidth / numHours;
        return (
            <View>
                <Svg width={chartWidth} height={height}>
                    {data.map((item, index) => (
                        <G key={index}>
                            <Rect
                                x={new Date(item.date).getHours() * barWidth}
                                y={height - (item.value / maxValue) * height}
                                rx={3}
                                width={6}
                                height={(item.value / maxValue) * height}
                                fill="#2dc6c6"
                            />
                        </G>
                    ))}
                </Svg>
            </View>
        );
    };

    return (
        <>
            <View py={2} backgroundColor="#ffffff" alignItems="center" px={2} flexDirection="row">
                <MaterialIcons onPress={() => props.navigation.navigate('Dashboard')} name="arrow-back-ios" color="black" size={14}></MaterialIcons>
                <HStack alignItems="center" pl={1}>
                    <Circle size="25px" bg="#e4f6f3">
                        <MaterialCommunityIcons name="water" color="#2dc6c6" size={18}></MaterialCommunityIcons>
                    </Circle>
                </HStack>
                <VStack pl={2} justifyContent="center">
                    <Text color="black" fontWeight="600" fontSize={15}>Glucose</Text>
                    <Text color="gray.400" fontSize={9}>12:00 am - 12:00 am</Text>
                </VStack>
            </View>
            <View h="100%" backgroundColor="#ffffff" >
                <ScrollView backgroundColor="#fff" h="100%" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View style={{ height: 190, flexDirection: 'row', backgroundColor: "#ffffff" }}>
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
                                xMax={new Date(2018, 0, 0, 23, 59).getTime()}
                                xMin={new Date(2018, 0, 0, 0, 0).getTime()}
                            >
                                <Gradient />
                            </AreaChart>
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
                                // numberOfTicks={4}
                                style={{ marginHorizontal: -15, height: 20 }}
                                contentInset={{ left: 20, right: 30 }}
                                formatLabel={(value, index) => data[index].date.getHours() % 6 === 0 ? data[index].date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                            />
                        </View>
                    </View>
                    <VStack px={6} py={2}>
                        <Text color="primary.600" fontWeight="500" fontSize="10px">AVG BG</Text>
                        <Text fontSize="xs" color="gray.400">160 mg/dl</Text>
                    </VStack>
                    <View px={3}>
                        <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <View flexDirection="row">
                                <VStack pl={3} py={3} space={0.5}>
                                    <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                                    <Text color="gray.400" isTruncated fontSize={9}>
                                        Glucose Performance Score
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
                        <HStack space={3} justifyContent="space-evenly" py={3}>
                            <Box w="30%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <VStack py={1} alignItems="center">
                                    <Heading color="black" fontSize="md" isTruncated>140&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                                    <Text color="gray.500" isTruncated fontSize={9}>
                                        Avg. BG
                                    </Text>
                                </VStack>
                            </Box>
                            <Box w="30%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <VStack py={1} alignItems="center">
                                    <Heading color="black" fontSize="md" isTruncated>60&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                                    <Text color="gray.500" isTruncated fontSize={9}>
                                        Lowest BG
                                    </Text>
                                </VStack>
                            </Box>
                            <Box w="30%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                <VStack py={1} alignItems="center">
                                    <Heading color="black" fontSize="md" isTruncated>350&nbsp;<Text color="gray.400" ml={3} fontSize={7}>mg/dl</Text></Heading>
                                    <Text color="gray.500" isTruncated fontSize={9}>
                                        Highest BG
                                    </Text>
                                </VStack>
                            </Box>
                        </HStack>
                    </View>
                    <View px={3} pt={4}>
                        <Heading color="black" fontSize="sm" isTruncated>Time in Range</Heading>
                        <Box w="100%" mt={3} rounded="lg" alignItems="flex-end" borderColor="coolGray.200" borderWidth="1">
                            <View style={{ height: 190, flexDirection: 'row', backgroundColor: "#ffffff" }}>
                                <YAxis
                                    data={data}
                                    style={{ width: 30 }}
                                    numberOfTicks={4}
                                    yAccessor={({ item }) => item.value}
                                    contentInset={contentInset}
                                    svg={{ fill: 'grey', fontSize: 10 }}
                                />

                                <View style={{ flex: 1 }}>
                                    <BarChart
                                        data={data}
                                        width={Dimensions.get('screen').width - 60} // Adjust the width as needed
                                        height={170} // Adjust the height as needed
                                    />
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
                                        // numberOfTicks={4}
                                        style={{ marginHorizontal: -15, height: 20 }}
                                        contentInset={{ left: 20, right: 30 }}
                                        formatLabel={(value, index) => data[index].date.getHours() % 6 === 0 ? data[index].date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                    />
                                </View>
                            </View>
                        </Box>
                        <Box w="100%" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <VStack py={3} space={3}>
                                <VStack >
                                    <HStack>
                                        <HStack w="80%">
                                            <Text fontSize="xs" pb={2} pl={3} fontWeight="700" color="black">Time In Range</Text>
                                        </HStack>
                                        <HStack w="20%" alignItems="center">
                                            <Text fontSize="xs" pl={3} fontWeight="700" color="black">00</Text>
                                        </HStack>
                                    </HStack>
                                    <Progress size="xs" mb={1} color="#2dc6c6" backgroundColor="gray.100" value={80} />
                                </VStack>
                                <VStack >
                                    <HStack>
                                        <HStack w="80%">
                                            <Text fontSize="xs" pb={2} pl={3} fontWeight="700" color="black">Time High</Text>
                                        </HStack>
                                        <HStack w="20%" alignItems="center">
                                            <Text fontSize="xs" pl={3} fontWeight="700" color="black">00</Text>
                                        </HStack>
                                    </HStack>
                                    <Progress size="xs" mb={1} color="#2dc6c6" backgroundColor="gray.100" value={50} />
                                </VStack>
                                <VStack >
                                    <HStack>
                                        <HStack w="80%">
                                            <Text fontSize="xs" pb={2} pl={3} fontWeight="700" color="black">Time Low</Text>
                                        </HStack>
                                        <HStack w="20%" alignItems="center">
                                            <Text fontSize="xs" pl={3} fontWeight="700" color="black">00</Text>
                                        </HStack>
                                    </HStack>
                                    <Progress size="xs" mb={1} _filledTrack={{ bg: "danger.600" }} backgroundColor="gray.100" value={20} />
                                </VStack>
                            </VStack>
                        </Box>
                    </View>
                </ScrollView>
            </View>
        </>
    )

}