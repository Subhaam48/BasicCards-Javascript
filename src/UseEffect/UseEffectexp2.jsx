


  ///By using useEffect() ===> we can acheive the side effect of component

import React, { useEffect, useState } from 'react'

const UseEffectexp2 = () => {
    const[count,setcount]=useState(0)
    const[name,setname]=useState("kehab")
    useEffect(()=>{
       console.log("componet upadating") 
    },[name])
    function UpdatedCount(){
        setcount((count)=>count+1)
        if(name==="keshab"){
            setname("payal")
        }
        else{
            setname("keshab")
        }
    }
    // function UpdatedCount(){
     
    // }
  return (
    <div>
     count:{count}
    
     <div><button onClick={UpdatedCount}>CLICK</button></div>
     Hero:{name}
     {/* <div><button onClick={UpdatedName}>CLICK</button></div> */}
    </div>
  )
}

export default UseEffectexp2