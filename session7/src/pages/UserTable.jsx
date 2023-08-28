import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  IconButton,
  ButtonGroup
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  const handleEditFieldChange = (id, field, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleSave = (id) => {
    setEditUserId(null); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setEditUserId(null); // Exit edit mode
  };

  const handleRemove = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      console.log(`Remove user with ID: ${id}`);
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <ChakraProvider>
      <Container display="flex" justifyContent="center" mt={5}>
        <Center w="100vw">
          <Table variant="simple" w="80vw" borderWidth="1px" borderStyle="solid" borderColor="gray.300">
            <Thead>
              <Tr>
                <Th border="1px solid" borderColor="gray.300" textAlign="center">ID</Th>
                <Th border="1px solid" borderColor="gray.300" textAlign="center">Name</Th>
                <Th border="1px solid" borderColor="gray.300" textAlign="center">Email</Th>
                <Th border="1px solid" borderColor="gray.300" textAlign="center">Username</Th>
                <Th border="1px solid" borderColor="gray.300" textAlign="center">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id} border="1px solid" borderColor="gray.300">
                  <Td textAlign="center" borderRight="1px solid" borderColor="gray.300">{user.id}</Td>
                  <Td borderRight="1px solid" borderColor="gray.300">
                    {editUserId === user.id ? (
                      <input
                        value={user.name}
                        onChange={(e) => handleEditFieldChange(user.id, 'name', e.target.value)}
                      />
                    ) : (
                      user.name
                    )}
                  </Td>
                  <Td borderRight="1px solid" borderColor="gray.300">
                    {editUserId === user.id ? (
                      <input
                        value={user.email}
                        onChange={(e) => handleEditFieldChange(user.id, 'email', e.target.value)}
                      />
                    ) : (
                      user.email
                    )}
                  </Td>
                  <Td borderRight="1px solid" borderColor="gray.300">
                    {editUserId === user.id ? (
                      <input
                        value={user.username}
                        onChange={(e) => handleEditFieldChange(user.id, 'username', e.target.value)}
                      />
                    ) : (
                      user.username
                    )}
                  </Td>
                  <Td borderRight="1px solid" borderColor="gray.300">
                    <ButtonGroup display="flex" justifyContent="center">
                      {editUserId === user.id ? (
                        <>
                          <IconButton
                            colorScheme="green"
                            aria-label="Save"
                            icon={<CheckIcon />}
                            onClick={() => handleSave(user.id)}
                          />
                          <IconButton
                            colorScheme="gray"
                            aria-label="Cancel"
                            icon={<CloseIcon />}
                            onClick={() => handleCancelEdit()}
                            ml={2}
                          />
                        </>
                      ) : (
                        <>
                          <IconButton
                            colorScheme="blue"
                            aria-label="Edit"
                            icon={<EditIcon />}
                            onClick={() => handleEdit(user.id)}
                          />
                          <IconButton
                            colorScheme="red"
                            aria-label="Remove"
                            icon={<DeleteIcon />}
                            onClick={() => handleRemove(user.id)}
                            ml={2}
                          />
                        </>

                      )}
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Center>
      </Container>
    </ChakraProvider >
  );
}

export default UserTable;
