import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
});

export const { actions, reducer } = counterSlice;
export const counter = counterSlice.reducer;
export const counterActions = actions;

const selectRoot = (store: RootState) => store.counter;

export const selectCount = createSelector(selectRoot, (counter) => {
  return counter.value;
});
