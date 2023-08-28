import { ChakraProvider, Center, Button, Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";


function useCounter(val, step) {
  const [count, setCount] = useState(val);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  return [count, increment, decrement];
}

function Counter() {
  const [count1, increment1, decrement1] = useCounter(0, 1);

  return (
    <>
      <ChakraProvider>
        <Center h="100vh" w="100vw">
          <Box bgColor="gray" w="50vw" h="50vh" display="flex" justifyContent="center" borderRadius={15}>

            <Flex align="center" justify="center" alignItems="center" gap={5}>
              <Button size='md'
                height='48px'
                width='60px' 
                colorScheme="orange"
                onClick={decrement1}
                >-
                </Button>
              <Text fontSize="6xl" color="white">
                {count1}
              </Text>
              <Button size='md'
                height='48px'
                width='60px' 
                colorScheme="orange"
                onClick={increment1}
                >+</Button>
            </Flex>
          </Box>

        </Center>
      </ChakraProvider>

    </>
  );
}

export default Counter;
