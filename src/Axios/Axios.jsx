import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const[userdata,setuserdata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
            setuserdata(response.data)
        })
    },[])
  return (
    <div style={{padding:"100px"}}>
   {
    userdata.map((ele)=>{
        return <li  key={Response.id} >{ele.email}</li>
    })
   }
    </div>
  )
}

export default Axios