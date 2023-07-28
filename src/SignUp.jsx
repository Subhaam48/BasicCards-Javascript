
import React from 'react'
import { useState } from "react"
import "./Form.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setname]=useState()
    const [email, setemail]=useState()
    const [password,setpassword]=useState()
    const [repassword,Setrepassword]=useState()

    let navigate=useNavigate();
 
    
 
    let Handledata=(e)=>{
   e.preventDefault()
   console.log(e)
   if(password===repassword){
    navigate('/SignIn')
     console.log(name,email,password)
   }
    }
  return (
    <div>
         <form action=""onSubmit={ Handledata}>
            <fieldset>
                <legend>SignUP</legend>
                <label htmlFor="">UserName :</label>
                <input type="text" placeholder='Enter your Name' onChange={(e)=>setname(e.target.value)}/>
                <label htmlFor="">Email :</label>
                <input type="email" placeholder='Enter your Email' onChange={(e)=>setemail(e.target.value)} />
                <label htmlFor="">Password :</label>
                <input type="password" placeholder='Enter your Password' onChange={(e)=>setpassword(e.target.value)} />
                <label htmlFor="">Conform Password :</label>
                <input type="password" placeholder='Re-Enter your password'onChange={(e)=>Setrepassword(e.target.value)} />
                <button type='Submit'>Submit</button>
                </fieldset>
        </form>
    </div>
  )
}

export default SignUp