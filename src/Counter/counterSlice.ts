import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  selectors: {
    selectCount: (counter) => counter.value,
  },
});

export const { actions, reducer } = counterSlice;
export const counter = counterSlice.reducer;
export const counterActions = actions;
export const { selectCount } = counterSlice.selectors;
