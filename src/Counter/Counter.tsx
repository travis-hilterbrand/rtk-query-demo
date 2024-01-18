import { useDispatch, useSelector } from "react-redux";

import { counterActions, selectCount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
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
