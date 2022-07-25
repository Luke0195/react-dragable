import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Columns from "./components/Column";
import "./App.css";
const App = () => {
  return (
    <Flex
      flexDir="column"
      bg="main-bg"
      minH="100vh"
      minW="full"
      color="white-text"
      pb="2rem"
    >
      <Flex py="4rem" flexDir={"column"} align="center">
        <Heading fontSize={"3xl"} fontWeight={"700"}>
          React Beautiful Drag and Drop
        </Heading>
        <Text fontSize="20px" fontWeight={700} color="subtle-text">
          react-beatiful drag and drop
        </Text>
      </Flex>
      <Flex justify={"space-between"} px="4rem">
        <Columns title="TO-DO" />
        <Columns title="PROCESSING" />
        <Columns title="FINISHED" />
      </Flex>
    </Flex>
  );
};

export default App;
