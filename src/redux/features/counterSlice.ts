import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// const [counter, setCounter] = useState(0)
// 0 -> counter in initialState
// counter -> counter in createSlice
// setCounter -> reducer in createSlice

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
