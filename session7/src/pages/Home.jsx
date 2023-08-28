
import { ChakraProvider, Heading, Flex, Center, Box} from "@chakra-ui/react";
import theme from "../theme";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box>
          <Center h="100vh" w="100vw" flexDirection="column">
            <Heading>Exercise Session 7</Heading>
            <Flex direction="column" mt={10}>
              <Link to="/Counter">Counter</Link>
              <Link to="/Stopwatch">Stopwatch</Link>
              <Link to="/Filter">Filter</Link>
              <Link to="/UserTable">User Table</Link>
              <Link to="/Chat">Chat App</Link>
            </Flex>
          </Center>
        </Box>
      </ChakraProvider>

    </>
  );
}

export default Home;
