import { Flex, Text } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
const Card = ({ item }: any): JSX.Element => {
  return (
    <Droppable droppableId={item.id}>
      {(droppableProvided, dropplableSnapshow) => (
        <Flex
          px="1.5rem"
          flex={1}
          flexDir="column"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <Flex
            mb="1rem"
            height={"30px"}
            bg="card-bg"
            rounded="8px"
            p="1.5rem"
            align={"center"}
          >
            <Text fontSize={"1.2rem"}> {item.content}</Text>
          </Flex>
        </Flex>
      )}
    </Droppable>
  );
};

export default Card;
