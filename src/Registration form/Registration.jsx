import React, { useEffect, useState } from 'react'
import "./Registration.css"

const Registration = () => {
    const data={name:"",email:'',password:''}
    const[inputdata,setinputdata]=useState(data)
    const[flag,setflag]=useState(false)
    useEffect(()=>{
          console.log("registered")
    },[flag])
    function handleData(e){
       
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
       
        e.preventDefault()
        if(!(inputdata.name && inputdata.email && inputdata.password)){
           alert("All fields are Mandotory")
        }
        else{
            setflag(true) 
        }

    }
  return (
    <>
    
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputdata.name},YOU Are Registered</h2>:""}</pre>
    <form action="" className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input className='input' type="text" placeholder='enter your name:' name='name' value={inputdata.name} onChange={handleData}/>
        </div>
        <div>
            <input className='input' type="text" placeholder='enter your Email:' name='email' value={inputdata.email}  onChange={handleData}/>
        </div>
        <div>
            <input className='input' type="text" placeholder='enter your Password:' name='password' value={inputdata.password}  onChange={handleData}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Registration