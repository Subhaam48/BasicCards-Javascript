import { useState } from "react";

function useCounter(intialvalue=0){
    const[count,setcount]=useState(intialvalue)

    function increment(){
        setcount(count+1)
    }
    function Decrement(){
        setcount(count-1);
    }
    return[count,increment,Decrement]
}
export default useCounter;