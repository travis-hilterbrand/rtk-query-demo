import { counterActions, selectCount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Counter</h3>
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
        <span> Count: {count} </span>
      </div>
    </div>
  );
};
