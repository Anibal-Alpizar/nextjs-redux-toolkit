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
      <h1 className="text-center text-2xl"> total : {count}</h1>

      <div className="flex justify-center gap-x-2">
        <button
          className="bg-green-500 px-3 py-2 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />

        <button
          className="bg-blue-500 px-3 py-2 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-3">
        {data?.map((user) => (
          <div className="bg-zinc-800 p-4" key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
