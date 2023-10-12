import { Heading, HStack, View, VStack, Progress, Box, Circle,Text, ScrollView} from "native-base";
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LineChart, BarChart, XAxis, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Dimensions } from "react-native";
import { Defs, G, LinearGradient, Stop,Image } from "react-native-svg";
import * as scale from 'd3-scale'

export default function Dashboard() {
    // const dataLine1 = [110,100,100,100,90,80,70,65,90,100,140,130,75,65,150,135,130,125,120,110,80,140,130,120,110]
    const dataLine1 = [20,20,100,0]
  
    const data = [
        {
            date: new Date(2000, 0, 1,  1, 0),
            svg: {
                fill: 'rgba(134, 65, 244, 0.2)',
                
            },
            label:'12 am',
        },
        {
            date: new Date(2000, 0, 1,  18, 0),
            svg: {
                fill: 'rgba(226, 240, 217, 0.5)',
            },
            label:'6 am'
        },
    ]
    const dataLine2 = [
        {
            date:new Date(2000, 0, 1,  0, 0),
            label:'12 am'
        },
        {
            date:new Date(2000, 0, 1,  6, 0),
            label:'6 am'
        },
        {
            date:new Date(2000, 0, 1,  12, 0),
            label:'12 pm'
        },
        {
            date:new Date(2000, 0, 1,  18, 0),
            label:'6 pm'
        }];

    const contentInset = { top: 30, bottom: 30 };
    const Gradient = () => (
        <G>
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgba(92,210,231,1)'}/>
                <Stop offset={'100%'} stopColor={'rgba(255,255,255,1)'}/>
            </LinearGradient>
        </Defs>
        </G>
    )
   
    return (
        <>
        <ScrollView backgroundColor="#fff" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ height: 190, flexDirection: 'row',backgroundColor:"#fff" }}>
                <YAxis
                    data={dataLine1}
                    style={{width:30}}
                    numberOfTicks={4}
                    contentInset={contentInset}
                    svg={{ fill: 'grey', fontSize: 10 }}
                />

                <View style={{ flex: 1 }}>
                    <LineChart
                        style={{ flex: 1,width:Dimensions.get('screen').width - 30 }}
                        data={dataLine1}
                        svg={{ stroke: 'rgb(65, 226, 244)',fill:'url(#gradient)' }}
                        // contentInset={contentInset}
                        curve={shape.curveCardinal.tension(0.2)} // Use curveCardinal with tension for a smooth curve
                    >
                           <Gradient/>
                        </LineChart>
                    <BarChart
                            style={{width:Dimensions.get('screen').width - 30, position: 'absolute', top: 0, bottom: 12, right: 0, left: 0 }}
                            data={data}
                            yAccessor={({ item }) => item.date.getHours()}
                             animate={true}
                            svg={{ fill: 'rgba(255, 0, 0, 0.3)',  fillOpacity:1 }}
                            contentInset={contentInset}
                            curve={shape.curveCardinal.tension(0.2)}
                            xScale={scale.scaleTime}
                        >
                        </BarChart>
                     
                    <XAxis
                        style={{ marginHorizontal: -10,width:Dimensions.get('screen').width - 30}}
                        data={dataLine2}
                        xAccessor={({ item }) => item.date.getHours()}
                        formatLabel={(value, index) => dataLine2[index].label}
                        contentInset={{ left: 20, right: 10 }}
                        svg={{ fontSize: 10, fill: 'gray' }}
                        scale={scale.scaleTime}
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