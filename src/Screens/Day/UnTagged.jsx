import React from "react"
import { Text, View, Heading, Circle, HStack, VStack, Box, QuestionIcon, Progress, ChevronRightIcon } from "native-base";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";

export default function UnTaggedScreen() {
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
                <HStack width="100%" mt={4}>
                    <Box width="10%" px={3} mr={3} mt={2}>
                        <Circle size="30px" bg="#fdb5af">
                            <Octicons color="#FF3C3C" name="upload" size={20}></Octicons>
                        </Circle>
                    </Box>
                    <Box width="40%">
                        <Text style={[styles.blackcolor]} fontSize="sm" bold>High Event</Text>
                        <Text color="gray.400" textAlign="left">12:00-1:00 PM</Text>
                    </Box>
                    <Box width="40%" mt={2} mr={1}>
                        <Text color="primary.500" textAlign="right" fontSize="16" >Details
                        </Text>
                    </Box>
                    <Box width="10%" mt={3}>
                        <ChevronRightIcon size="4" color="primary.500" />
                    </Box>
                </HStack>
                <View flexDirection="row" mt={4}>
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
                <Progress size="xs" mb={1} mt={4} backgroundColor="gray.100" value={80} />
                <View w="100%" px={2} mb={3} flexDirection="row">
                    <View w="50%">
                        <Text color="gray.400" textAlign="left" fontSize={12}>Low Control</Text>
                    </View>
                    <View w="50%">
                        <Text color="gray.400" textAlign="right" fontSize={12}>High Control</Text>
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