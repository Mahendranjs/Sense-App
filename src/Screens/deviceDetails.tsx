import { Avatar, VStack, Heading,View,Text,Pressable,Button,ScrollView } from "native-base";
import React from "react"

export default function DeviceDetails() {
    return (
        <View px={4} w="100%" pt={3} backgroundColor="#fff" flex={1}>
      <ScrollView>
        <Pressable w="100%" rounded="lg" flexDirection="row" overflow="hidden" borderColor="coolGray.200" borderWidth="0.8">
        <View w="80%" flexDirection="row">
          <View pl={2} py={3} alignItems="center">
          <Avatar size="sm" alignSelf="center" bg="transparent" source={{
            uri: "https://static.vecteezy.com/system/resources/previews/017/221/833/large_2x/apple-logo-free-png.png"
          }}></Avatar>
          </View>
          <VStack px={1} py={3} space={0.5}>
            <Heading color="black" fontSize="xs" isTruncated>Apple Watch Model4</Heading>
            <Text color="gray.400" isTruncated fontSize={10}>
            Apple
          </Text>
          </VStack>
          </View>
          <VStack px={1} py={2} justifyContent="center" alignItems="flex-end">
            <Text fontSize={11} color="#2dc6c6">
              Details
            </Text>
            <Text  color="gray.400" fontSize={10}>
              Connected
            </Text>
          </VStack>
        </Pressable>
        <Button mt="2" rounded="lg" variant="outline" borderColor="red.500" fontSize="lg" fontWeight="bold" size="md" _text={{ fontWeight: "semibold",color:"red.500" }}>Remove Device</Button>
        </ScrollView>
    </View>
    );
}