import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Button, Flex, Container, Text, theme } from '@chakra-ui/react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const convertSecondsToMinutesAndSeconds = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <ChakraProvider theme={theme}>
            <Center w="100vw" h="100vh">
                <Container display="flex" flexDirection="column" bgColor="red" w="50vw" h="50vh" justifyContent="center" borderRadius={15}>

                <Flex align="center" justify="center">
                    <Text fontSize="6xl">{convertSecondsToMinutesAndSeconds(time)}</Text>
                </Flex>
                <Flex align="center" justify="center" gap={5}>
                <Button colorScheme="facebook" onClick={startAndStop}>
                        {isRunning ? 'Stop' : 'Start'}
                    </Button>
                    <Button colorScheme ="facebook" onClick={reset}>Reset</Button>
                </Flex>
                
                </Container>
            </Center>
        </ChakraProvider>
    );
}

export default Stopwatch;
