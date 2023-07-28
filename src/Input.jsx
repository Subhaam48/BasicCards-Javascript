import React, { useState } from 'react'

const Input = () => {
    const [name,setname]=useState('')
    // const[]
    const handleData=(e)=>{
         setname(e.target.value)
    }
    const AddHandler=(e)=>{
        e.preventDefault()
        // setname(e.target.value) 
    }
  return (
    <div>
        <input type="text" value={name}  onChange={handleData}/>
        <button onClick={AddHandler}>Add</button>
        {/* {name} */}
    </div>
  )
}

export default Input