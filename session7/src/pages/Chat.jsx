import React, { useState } from "react";
import {
    ChakraProvider,
    Textarea,
    Center,
    Container,
    IconButton,
    Flex,
    Box,
    Avatar,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function ChatBubble({ isUser, text, avatar }) {
    return (
        <Flex
            p={2}
            alignItems="flex-start"
            flexDirection={isUser ? "row-reverse" : "row"}
        >
            <Avatar src={avatar} mr={2} />
            <Box
                p={3}
                bg={isUser ? "blue.500" : "gray.200"}
                color={isUser ? "white" : "black"}
                borderRadius={isUser ? "15px 15px 0 15px" : "15px 15px 15px 0"}
                maxWidth="70%"
            >
                {text}
            </Box>
        </Flex>
    );
}

function Chat() {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState("");

    const handleSendMessage = () => {
        if (messageText.trim() !== "") {
            const newMessage = {
                text: messageText,
                avatar: "https://bit.ly/broken-link", // URL to an avatar image
            };
            setMessages([...messages, newMessage]);
            setMessageText(""); // Clear the input after sending
        }
    };

    return (
        <ChakraProvider>
            <Center h="100vh">
                <Container maxW="xl" p={4} borderWidth="1px" borderRadius="lg">
                    <Flex direction="column">
                        <Box flex="1">
                            {messages.map((message, index) => (
                                <ChatBubble
                                    key={index}
                                    isUser={false}
                                    text={message.text}
                                    avatar={message.avatar}
                                />
                            ))}
                        </Box>
                        <Flex alignItems="center">
                            <Textarea
                                flex="1"
                                placeholder="What's on your mind?"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                            />
                            <IconButton
                                aria-label="send"
                                icon={<ArrowForwardIcon />}
                                ml={2}
                                colorScheme="blue"
                                onClick={handleSendMessage}
                            />
                        </Flex>
                    </Flex>
                </Container>
            </Center>
        </ChakraProvider>
    );
}

export default Chat;
