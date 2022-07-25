import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface ColumnProps {
  title: string;
}
const Column = (props: ColumnProps) => {
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
          {props.title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Column;
