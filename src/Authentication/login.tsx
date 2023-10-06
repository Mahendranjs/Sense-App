import { Box, Button, Center, Flex, FormControl, HStack, Heading, Input, Link, VStack } from "native-base";
import React from "react"
import { View, Text } from "react-native";

export default function LoginScreen() {
    return  <Flex alignItems="center"><Center w="100%">
        <Box safeAreaBottom safeArea p="2" py="8" w="90%" maxW="290"  h={40}>
           <Flex alignItems="center">
            <Heading mt="1" fontWeight="medium" size="xs" color="coolGray.400" style={{
                alignItems: 'center',
            }}>
                Welcome to
            </Heading>
            <Heading mt="1" fontWeight="medium" size="xs" color="coolGray.400">
                Deriving clarity from chaos.
            </Heading>
            </Flex>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label color="coolGray.900">Email</FormControl.Label>
                    <Input placeholder="Email" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input style={{ color: "red" }} type="password" placeholder="Password" />
                </FormControl>
                <Button mt="2">
                    Login In
                </Button>
                <Button mt="2" variant={"outline"} colorScheme="#2dc6c6">
                    Sign Up
                </Button>
                <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "#2dc6c6"
                }} alignSelf="flex-end" mt="1">
                    Forget Password?
                </Link>
            </VStack>
        </Box>
    </Center>;
    </Flex> 
}