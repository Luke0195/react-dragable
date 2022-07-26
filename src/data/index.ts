const initialData = {
  tasks: {
    1: { id: 1, content: "The first task" },
    2: { id: 2, content: "The second task" },
    3: { id: 3, content: "The third task" },
    4: { id: 4, content: "The fourth task" },
    5: { id: 5, content: "The fifth task" },
    6: { id: 6, content: "The fifth task" },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "To-Do",
      tasksIds: [1, 2, 3, 4, 5, 6],
    },
    "column-2": {
      id: "column-2",
      title: "IN-PROCESSING",
      tasksIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "COMPLETED",
      tasksIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
