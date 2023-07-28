import React from "react";
import { createContext } from "react";
// import Child from './Child';
import Home from "./Home";

const usercontext = createContext();
// const user1context=createContext()

const ContexApi = () => {
  let arr = [
    {
      id: 1,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 7,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 8,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 9,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 10,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 11,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 12,
      url: "https://tse1.mm.bing.net/th?id=OIP.iSAH4kQh7ZvP52rHKeGoVwHaE8&pid=Api&P=0&h=180",
    },
  ];
  let y = "subham";
  return (
    <usercontext.Provider value={[...arr, y]}>
      {/* {children} */}
      <Home />
    </usercontext.Provider>
  );
};

export default ContexApi;
export { usercontext };
