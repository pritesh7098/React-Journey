// i have used redux toolkit here :

import { createSlice, nanoid } from "@reduxjs/toolkit";
// nano id generates unique id

const intialState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  intialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // new value
        text: action.payload, // action for new updated data which is passed
      };

      state.todos.push(todo);
    },

    // always have 2 things state and action

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
