"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useGetUsersQuery } from "@/redux/services/userApi";

function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  const dispatch = useAppDispatch();

  return (
    <>
      <h1> total : {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
