import { Flex, Text } from "@chakra-ui/react";

const Card = (): JSX.Element => {
  return (
    <Flex px="1.5rem" flex={1} flexDir="column">
      <Flex
        mb="1rem"
        height={"30px"}
        bg="card-bg"
        rounded="8px"
        p="1.5rem"
        align={"center"}
      >
        <Text fontSize={"1.2rem"}> Hey There </Text>
      </Flex>
    </Flex>
  );
};
