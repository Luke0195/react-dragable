import { Flex, Heading, Text } from "@chakra-ui/react";
import { curry } from "lodash";
import Column from "./components/Column";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
const reorderTasks = (tasks: any, startIndex: any, endIndex: any) => {
  const newTaskList = Array.from(tasks);
  const [removed] = newTaskList.splice(startIndex, 1);
  newTaskList.splice(endIndex, 0, removed);
  return newTaskList;
};

export default function App() {
  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const [state, setState] = useState(initialData);
  const [placeholderProps, setPlaceholderProps] = useState({});
  //@ts-ignore
  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    return draggedDOM;
  };
  //@ts-ignore
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // if the user drops outside of a droppable destination
    if (!destination) return;

    // If the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops in a different postion
    const { tasks } = state;
    const newTasks = reorderTasks(tasks, source.index, destination.index);

    const newState = {
      ...state,
      tasks: newTasks,
    };
    //@ts-ignore
    setState(newState);
  };

  const onDragUpdate = (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const draggedDOM = getDraggedDom(draggableId);
    //@ts-ignore
    if (!draggedDOM.parentNode) return;
    //@ts-ignore
    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = destination.index;
    const sourceIndex = source.index;
    //@ts-ignore
    const childrenArray = draggedDOM.parentNode.children
      ? //@ts-ignore
        [...draggedDOM.parentNode.children]
      : [];

    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.splice(0, destinationIndex),
      movedItem,
      ...childrenArray.splice(destinationIndex + 1),
    ];

    const clientY =
      //@ts-ignore
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.splice(0, destinationIndex).reduce((total, current) => {
        //@ts-ignore
        const style = current.currentStyle || window.getComputedStyle(current);
        const marginBottom = parseFloat(style.marginBottom);
        return total + current.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
    });
  };

  const onDragStart = (result: any) => {
    const { source, draggableId } = result;
    const draggedDOM = getDraggedDom(draggableId);

    if (!draggedDOM) return;

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = source.index;

    if (!draggedDOM.parentNode) return;

    /**
     * 1. Take all the items in the list as an array
     * 2. Slice from the start to the where we are dropping the dragged item (i.e destinationIndex)
     * 3. Reduce and fetch the styles of each item
     * 4. Add up the margins, widths, paddings
     * 5. Accumulate and assign that to clientY
     */
    const clientY =
      //@ts-ignore
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, sourceIndex)
        .reduce((total, current) => {
          const style =
            //@ts-ignore
            current.currentStyle || window.getComputedStyle(current);
          const marginBottom = parseFloat(style.marginBottom);

          return total + current.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
    });
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Flex
        flexDir="column"
        bg="main-bg"
        minH="100vh"
        w="full"
        color="white-text"
        pb="2rem"
      >
        <Flex py="4rem" flexDir="column" align="center">
          <Heading fontSize="3xl" fontWeight={600}>
            react-beautiful-dnd
          </Heading>
          <Text fontSize="20px" fontWeight={600} color="subtle-text"></Text>
        </Flex>

        <Flex justify="center" px="4rem">
          <Column placeholderProps={placeholderProps} tasks={state.tasks} />
        </Flex>
      </Flex>
    </DragDropContext>
  );
}

const initialData = {
  tasks: [
    { id: 1, content: "The first task" },
    { id: 2, content: "The second task" },
    { id: 3, content: "The third task" },
    { id: 4, content: "The fourth task" },
    { id: 5, content: "The fifth task" },
  ],
};
