

///by using useEffect() ===> we can acheive the side effect of component

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("componet is rendering")
        setTimeout(() => {
           setcount((count)=>count+1) 
        }, 1000);

    //     setInterval(() => {
    //         setcount((count)=>count+1)
    //     }, 1000);  
    
    },[])

  return (
    <div>
   you have rendered {count} times!!!
    </div>
  )
}

export default UseEffect