import React from "react";
import Card from "../Card";

import { Flex, Text } from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }: any) => {
  return (
    <Flex
      rounded={"3px"}
      bg="column-bg"
      w="400px"
      h="620px"
      flexDir="column"
      mr="1.5rem"
      ml="1.5rem
      "
    >
      <Flex
        align="center"
        h="60px"
        bg="column-header-bg"
        rounded="3px 3px 0 0"
        px="1.5rem"
        mb="1.5rem"
      >
        <Text
          fontSize="17px"
          align={"center"}
          justifyContent={"center"}
          fontWeight={600}
          color="subtle-text"
        >
          {" "}
          {column.title}
        </Text>
      </Flex>
      <Droppable droppableId={column.id}>
        {(droppableProvided, dropplableSnapshot) => (
          <Flex
            px="1.5rem"
            flex={1}
            flexDir="column"
            bg="red"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((item: any, index: number) => {
              console.log(item);
              return (
                <Draggable
                  key={item.id}
                  draggableId={`${item.id}`}
                  index={item.id}
                >
                  {(draggableProvided, draggablesnapShot) => (
                    <Flex
                      key={item.id}
                      mb="1rem"
                      height={"30px"}
                      bg="card-bg"
                      rounded="8px"
                      p="1.5rem"
                      align={"center"}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    >
                      <Text fontSize={"1.2rem"}> {item.content}</Text>
                    </Flex>
                  )}
                </Draggable>
              );
            })}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
