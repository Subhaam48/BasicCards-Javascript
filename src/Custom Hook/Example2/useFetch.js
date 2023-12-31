import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
}
    , [url]);

  return [data,fetch];
};

export default useFetch;