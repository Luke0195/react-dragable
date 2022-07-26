import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Columns from "./components/Column";
import "./App.css";
import initialData from "./data/index";
const App = () => {
  const [state, setState] = useState(initialData);
  const onDragEnd = (result: DropResult) => {
    // para onde o drag está indo
    const { destination, source } = result;
    console.log("Destino", destination);
    console.log("Source", source);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
          {state.columnOrder.map((columnId: string) => {
            //@ts-ignore
            const column = state.columns[`${columnId}`];
            //@ts-ignore
            const tasks = column.tasksIds.map((taskId) => state.tasks[taskId]);
            //@ts-ignore
            return <Columns key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </Flex>
    </DragDropContext>
  );
};

export default App;
