import React, { useState } from 'react';
import {
    Container,
    VStack,
    Heading,
    Box,
    Stack,
    Flex,
    Checkbox,
    Spacer,
    IconButton,
    Input,
    Button,
    Center,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
    AlertDialogCloseButton,
    useColorMode,
    ChakraProvider,
    CSSReset,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


function TodoList() {
    const [deleteIndex, setDeleteIndex] = useState(-1);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const openDeleteDialog = (index) => {
        setDeleteIndex(index);
        setIsDeleteDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
        setDeleteIndex(-1);
    };


    const [todos, setTodos] = useState([
        {
            value: "Create Guest Experience mobile check-in",
            isDone: false,
        },
        {
            value: "Document current CI/CD process",
            isDone: false,
        },
        {
            value: "Perform Code Review for Final Pillow-talk Release",
            isDone: false,
        },
        {
            value: "Implement new Color Palette from Design Team",
            isDone: false,
        },
        {
            value: "Fix image uploading process for guest check-in",
            isDone: false,
        },
        {
            value: "Provide on boarding documentation",
            isDone: false,
        },

    ]);

    const { setColorMode } = useColorMode();
    setColorMode("dark");
    const [newTodo, setNewTodo] = useState("")

    const handleAddTodo = () => {
        if (newTodo) {
            const newTodos = [...todos, { value: newTodo, isDone: false }]
            setTodos(newTodos);
            setNewTodo("");
        }
    };

    const handleDelete = () => {
        const copy = [...todos];
        copy.splice(deleteIndex, 1);
        setTodos(copy);
        closeDeleteDialog();
    };

    const donedTodo = todos.filter((todo) => todo.isDone).length;

    return (
        <Container>
            <VStack>
                <Heading>
                    To Do List
                </Heading>
                <Container maxWidth="2xl" centerContent>
                    <Box padding='4'>
                        <Stack w="lg" spacing={2} direction='column' borderBottom="2px" borderBottomColor="gray.200">
                            {todos.map((todo, index) => (
                                <Flex key={todo.value} align="center" justify="center" mb={2}>
                                    <Checkbox size="md"
                                        isChecked={todo.isDone}
                                        onChange={() => {
                                            const copy = [...todos];
                                            copy[index].isDone = !copy[index].isDone;
                                            setTodos(copy);
                                        }}
                                    >
                                        {todo.value}
                                    </Checkbox>
                                    <Spacer></Spacer>
                                    <Flex align="center" justify="center">
                                        <IconButton size="sm" colorScheme="blue" icon={<DeleteIcon />}
                                            onClick={() => openDeleteDialog(index)}
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </VStack>
            <VStack>
                <Container maxWidth="2xl" centerContent>
                    <Box padding='4'>
                        <Center>
                            Done : {donedTodo}
                        </Center>
                        Add Todo <br />
                        <Flex align="center">
                            <Input value={newTodo}
                                onChange={(e) => {
                                    setNewTodo(e.target.value);
                                }} w="lg" mt={2} />
                        </Flex>
                        <Button colorScheme='teal' mt={2} onClick={handleAddTodo}>ADD TASK</Button>
                    </Box>
                </Container>
                <AlertDialog isOpen={isDeleteDialogOpen} leastDestructiveRef={undefined} onClose={closeDeleteDialog}>
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Delete Task
                            </AlertDialogHeader>

                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                Are you sure you want to delete this task?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button onClick={closeDeleteDialog}>Cancel</Button>
                                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                                    Confirm Delete
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </VStack>
        </Container>

    )
}
export default TodoList;










// function App() {
//   const [loading, setLoading] = useState(false);
//   return (
//     <ChakraProvider theme = {theme}>
//       <Box bg="merah.700" w={{ base: "100%", md: "75%" }}>
//         <Container>
//           <div> Hello World </div>
//           <ButtonGroup variant="solid">
//             <Button as="a" href="https://facebook.com"
//               colorScheme="facebook"
//               size="lg"
//             >
//               Ini button chakra 1
//             </Button>
//             <Button
//               onClick={() => {
//                 setLoading(true);
//               }}
//               isLoading={loading}
//               colorScheme="whatsapp"
//               size="lg"
//             >
//               Ini button chakra 2</Button>
//           </ButtonGroup>
//         </Container>
//       </Box>

//     </ChakraProvider>
//   )
// }