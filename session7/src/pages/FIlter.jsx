import React, { useState } from "react";
import {
  ChakraProvider,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  List,
  ListItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const datas = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Strawberry",
  "Persimmon",
];

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredDatas = datas.filter((data) =>
    data.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ChakraProvider>
      <Container display="flex" justifyContent="center" mt={5} backgroundColor="gray" color="white" borderRadius={15}>
        <Center w="50vw" display="flex" flexDirection="column" mb={5}>
          <InputGroup mt={5}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" borderColor="gray" />
            </InputLeftElement>
            <Input
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <List mt={4}>
            {filteredDatas.map((data, index) => (
              <ListItem key={index}>{data}</ListItem>
            ))}
          </List>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default Filter;
