// normal form handling
import React, { useState } from 'react'

function FormHandling() {
    console.log('hii i am form handler')
    let [username,setName]=useState('')
    let [pass,setPass]=useState('')
    let [email,setEmail]=useState('')
    let [course,setCourse]=useState('')
    let [comment,setComment]=useState('')
    //this function for userhandler
    function userNameHandler(e)
    {
        setName(e.target.value)
    }
    function passHandler(e)
    {
        setPass(e.target.value)
    }
    function emailHandler(e)
    {
        setEmail(e.target.value)
    }
    function  courseHandler(e)
    {
        console.log(e.target.value)
        setCourse(e.target.value)
    }
    function commentHandler(e)
    {
        setComment(e.target.value)
    }
    //this is functionality for the submit your form
    function submitHandler()
    {
        console.log(username,pass,email,course,comment)
    }
  return (
     <>
     <h1>hii i am form handling</h1>
     UserName: <input type="text" placeholder='enter your username' onChange={userNameHandler}/>
     <br/>
     Password: <input type="password" placeholder='enter your password' onChange={passHandler}/>
     <br/>
     Email: <input type="email" placeholder='enter your email' 
     onChange={emailHandler}/>
     <br/>
       select your course:
        <select onChange={courseHandler}>
        <option value="mern">mern</option>
        <option value="java">java</option>
        <option value="python">python</option>
       </select>
       <br/>
        Comment: <textarea row="10" col="10" onChange={commentHandler}/>
        <br/>
         <button onClick={submitHandler}>submit</button>
     </>
  )
}

export default FormHandling

//  2nd way (reduce multiple state)
import React, { useState } from 'react'

function FormHandling() {
    console.log('hii i am form handler')
     let [form,setForm]=useState({
        name:"",
        pass:"",
        email:'',
        course:"",
        comment:""
     })
     
    //this function for userhandler
    function userNameHandler(e)
    {
        setForm({...form,name:e.target.value})
    }
    function passHandler(e)
    {
        setForm({...form,pass:e.target.value})
    }
    function emailHandler(e)
    {
        setForm({...form,email:e.target.value})
    }
    function  courseHandler(e)
    {
        setForm({...form,course:e.target.value})
    }
    function commentHandler(e)
    {
        setForm({...form,comment:e.target.value})
    }
    //this is functionality for the submit your form
    function submitHandler()
    {
        console.log(form.name,form.pass,form.email,form.course,form.comment)
    }
  return (
     <>
     <h1>hii i am form handling</h1>
     UserName: <input type="text" placeholder='enter your username' onChange={userNameHandler}/>
     <br/>
     Password: <input type="password" placeholder='enter your password' onChange={passHandler}/>
     <br/>
     Email: <input type="email" placeholder='enter your email' 
     onChange={emailHandler}/>
     <br/>
       select your course:
        <select onChange={courseHandler}>
        <option value="mern">mern</option>
        <option value="java">java</option>
        <option value="python">python</option>
       </select>
       <br/>
        Comment: <textarea row="10" col="10" onChange={commentHandler}/>
        <br/>
         <button onClick={ }>submit</button>
     </>
     
  )
}

export default FormHandling

//3rd (optimal way)

import React, { useState } from 'react'

function FormHandling() {
    console.log('hii i am form handler')
     let [form,setForm]=useState({
        name:"",
        pass:"",
        email:'',
        course:"",
        comment:""
     })
    //this function for userhandler
    function commonHandler(e)
    {
        let {name,value}=e.target
        setForm((pre)=>{
          return{...pre,[name]:value}
        })
    } 
   
     
    
    
    //this is functionality for the submit your form
    function submitHandler()
    {
        console.log(form.name,form.pass,form.email,form.course,form.comment)
    }
  return (
     <>
     <h1>hii i am form handling</h1>
     UserName: <input type="text" placeholder='enter your username' onChange={commonHandler} name="name"/>
     <br/>
     Password: <input type="password" placeholder='enter your password' onChange={commonHandler} name="pass"/>
     <br/>
     Email: <input type="email" placeholder='enter your email' 
     onChange={commonHandler} name='email'/>
     <br/>
       select your course:
        <select onChange={commonHandler} name='course'>
        <option value="mern">mern</option>
        <option value="java">java</option>
        <option value="python">python</option>
       </select>
       <br/>
        Comment: <textarea row="10" col="10" onChange={commonHandler} name='comment'/>
        <br/>
         <button onClick={submitHandler}>submit</button>
     </>
  )
}

export default FormHandling