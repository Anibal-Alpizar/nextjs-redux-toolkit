"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";

function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1> total : {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default HomePage;
