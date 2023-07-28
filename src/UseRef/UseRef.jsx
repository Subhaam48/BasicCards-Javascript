import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [name,setname]=useState("")
    const textref=useRef('')

    function handler(){
        textref.current.style.background='none'
        textref.current.focus()
        textref.current.style.color='green'
        
       
    }
    function Removedata(){

         setname("");
         textref.current.focus()
         textref.current.style.background='red'
    }
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)} ref={textref}/>

        <button onClick={Removedata}>Remove</button>
        <button onClick={handler}>click</button>


        <div>Name:{name}</div>
        
    </div>
  )
}

export default UseRef