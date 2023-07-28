import axios from 'axios';
import React, { useState } from 'react'

const AxioxPut = () => {
    const data ={name:'',password:''};
    const [inputData,setinputData]=useState(data)
    const handleData=(e)=>{
        setinputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.post('https://jsonplaceholder.typicode.com/users',inputData).then((res)=>{console.log(res)})
    }
  return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={inputData.name} onChange={handleData} /><br />
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={inputData.password} onChange={handleData}/><br />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default AxioxPut