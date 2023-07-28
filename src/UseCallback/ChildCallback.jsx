import React, { useCallback, useState } from 'react'

const ChildCallback = () => {
    const [inc,setinc]=useState(0)
    const [dec,setdec]=useState(0)

    useCallback(()=>{

     console.log("component is rendering")

     


    },[inc])

 function Decrement(){
    setdec(()=>dec-1)
 }
 function Increment(){
    setinc(()=>inc+1)
 }
console.log("page is rendering")
  return (
    <div>
        
       <p> Increment:{inc}</p>
       <p> Decrement:{dec}</p>
    <button onClick={Increment}>_inc_</button>
    <button onClick={Decrement}>_dec_</button>
    </div>
  )
}

export default ChildCallback