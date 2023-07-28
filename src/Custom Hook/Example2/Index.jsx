import React from 'react'
import useFetch from "./useFetch";

const Index = () => {
  const [data,fetch] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
        <button onClick={fetch}>fetch</button>
    </>
  );
};
export default Index;