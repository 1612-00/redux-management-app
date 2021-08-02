import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "todo 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "todo 2",
      content: "content 2",
    },
  ],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todo.reducer;
