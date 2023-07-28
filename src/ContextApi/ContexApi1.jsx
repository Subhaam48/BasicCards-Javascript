import React, { children } from 'react'
import { createContext } from 'react'
// import Child from './Child';


const usercontext=createContext();

const ContexApi = ({children}) => {
 
  return (
    <usercontext.Provider value="subham">hii i am subham
     {children}
    </usercontext.Provider>
  )
}

export default ContexApi
export {usercontext}
