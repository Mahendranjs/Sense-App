import React, { useState } from "react";
import { Box, Button, Flex, FormControl, Heading, Input, Link, VStack } from "native-base";

export default function LoginScreen() {
    const [formData, setData] = useState({});
    const [emailError, setEmailError] = useState({});
    const [passError, setPassError] = useState({});

    const validateEmail = (value) => {
        var validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (value === undefined || value == '') {
            setEmailError({
                ...emailError,
                emailmsg: "Email is required",
            });
        } else if (value.trim() == '') {
            setEmailError({
                ...emailError,
                emailmsg: "Email is required",
            });
        } else if(!value.match(validRegex)) {
            setEmailError({
                ...emailError,
                emailmsg: "Invalid Email",
            });
        }
        else {
            setEmailError({});
        }
    };

    const validatePassword = (value) => {
        if (value === undefined || value == '') {
            setPassError({
                ...passError,
                passmsg: "Password is required",
            });
        } else if (value.trim() == '') {
            setPassError({
                ...passError,
                passmsg: "Password is required",
            });
        } else {
            setPassError({});
        }
    };

    const onSubmit = () => {
        validateEmail(formData.email);
        validatePassword(formData.password);
        // use Object.Keys instead of emailError.emailmsg to avoid undefined error
        if (Object.keys(emailError).length === 0 && Object.keys(passError).length === 0) {
            console.log("Submitted");
        } else {
            console.log("Validation Failed");
        }
    };

    return (
        <Flex alignItems="center" mt="100">
            <Box safeAreaBottom safeArea p="2" py="8" w="90%" maxW="290">
                <Flex alignItems="center">
                    <Heading mt="1" fontWeight="medium" size="xs" color="coolGray.400">
                        Welcome to
                    </Heading>
                    <Heading mt="1" fontWeight="medium" size="xs" color="coolGray.400">
                        Deriving clarity from chaos.
                    </Heading>
                </Flex>
                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={"emailmsg" in emailError}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            color="black"
                            placeholder="Email"
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    email: value,
                                });
                                validateEmail(value);
                            }}
                        />
                        <FormControl.ErrorMessage>{emailError.emailmsg}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={"passmsg" in passError}>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            color="black"
                            type="password"
                            placeholder="Password"
                            onChangeText={(value) => {
                                setData({
                                    ...formData,
                                    password: value,
                                });
                                validatePassword(value);
                            }}
                        />
                        <FormControl.ErrorMessage>{passError.passmsg}</FormControl.ErrorMessage>
                    </FormControl>
                    <Button mt="2" onPress={onSubmit}>
                        Log In
                    </Button>
                    <Button mt="2" variant="outline" borderColor="primary.500">
                        Sign Up
                    </Button>
                    <Link
                        _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "#2dc6c6",
                        }}
                        alignSelf="flex-end"
                        mt="1"
                    >
                        Forget Password?
                    </Link>
                </VStack>
            </Box>
        </Flex>
    );
}
