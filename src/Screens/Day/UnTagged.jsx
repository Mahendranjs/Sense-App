import React from "react"
import { Text, View, Heading, Circle, HStack, VStack, Box, QuestionIcon, Progress, ChevronRightIcon } from "native-base";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function UnTaggedScreen(props) {
    return (
        <View flex={1} h="100%" w="100%" backgroundColor="#ffff" color="#ffff" px={4} pt={4}>
            <HStack>
                <VStack>
                    <Circle size="30px" bg="#fdb5af" mt={2} mr={3}>
                        {/* <QuestionIcon size="5" color="black" /> */}
                        <AntDesign color="#FF3C3C" name="question" size={20}></AntDesign>
                    </Circle>
                </VStack>
                <VStack mt={3}>
                    <Text color="#FF4500" bold fontSize="sm">Untagged High & Low Events</Text>
                </VStack>
            </HStack>
            <Box w="100%" h="auto" mt={3} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <View flexDirection="row">
                    <HStack w="80%">
                        <View pl={4} py={4} justifyContent="center">
                            <Circle size={30} bg="#fdb5af">
                            <Octicons color="#FF3C3C" name="upload" size={16}></Octicons>
                            </Circle>
                        </View>
                        <VStack px={2} py={4} space={0.5}>
                            <Heading color="black" fontSize="sm" isTruncated>High Event</Heading>
                            <Text color="gray.500" isTruncated fontSize={10}>
                                12:00 - 1:00 PM
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack w="20%" py={4} mt={2}>
                        <Text fontSize={13} color="#2dc6c6" onPress={() => props.navigation.navigate('UnTaggedEventDetails')}>
                            Details <MaterialIcons name="arrow-forward-ios" color="#2dc6c6" size={9}></MaterialIcons>
                        </Text>
                    </HStack>
                </View>
                <View flexDirection="row" mt={4}>
                    <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                        <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                        <Text color="black" isTruncated fontSize="xs">
                            -05 BG
                        </Text>
                        <Text color="gray.400" isTruncated fontSize="xs">
                            15m Before
                        </Text>
                    </VStack>
                    <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                        <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                        <Text color="black" isTruncated fontSize="xs">
                            +20 BG
                        </Text>
                        <Text color="gray.400" isTruncated fontSize="xs">
                            During
                        </Text>
                    </VStack>
                    <VStack alignItems="center" w="30%" pl={3} py={3} space={0.5}>
                        <Heading color="black" fontSize="xl" isTruncated>60</Heading>
                        <Text color="black" isTruncated fontSize="xs">
                            +75 BG
                        </Text>
                        <Text color="gray.400" isTruncated fontSize="xs">
                            1hr After
                        </Text>
                    </VStack>
                </View>
                <Progress size="xs" mb={1} mt={4} backgroundColor="gray.100" value={80} />
                <View w="100%" px={2} mb={3} flexDirection="row">
                    <View w="50%">
                        <Text color="gray.400" textAlign="left" fontSize="xs">Low Control</Text>
                    </View>
                    <View w="50%">
                        <Text color="gray.400" textAlign="right" fontSize="xs">High Control</Text>
                    </View>
                </View>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    blackcolor: {
        color: 'black'
    }
});