

// import SignUp from './SignUp'
// import SignIn from './SignIn'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import SignIn from './SignIn'
// const App = () => {
//   return (
//     <div>
//       {/* <SignUp/> */}
//       {/* <SignIn/> */}
//       <BrowserRouter>
//       <Routes>
//       <Route path='/' element={ <SignUp/>}
//           ></Route>
//       </Routes>
        
//         <Routes>
        
          
//           <Route path='/SignIn' element={ <SignIn/>}
//           ></Route>
         
//           </Routes>
          
        
      
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import "./Product.css"
// function App() {
//   const[data,setData] = useState([])
//   async function Getdata() {
//     const res = await fetch("https://dummyjson.com/products");
//     const product = await res.json();
//     setData(product.products);
   
//   }

//   return (
//     <div>
     
//       <h1> hello world</h1>
//      <div className='main-container'>
//       {
//         data.map((ele)=>(
//           <div className='cont-1'>
//             <div>
//             <img src={ele.images[3]} alt='product' className='img'></img>
//             <span>{ele.id}</span>
//             </div>
//             <div>
//            <h4 className='title'>{ele.title}</h4>
//            <sub className='description'>{ele.description}</sub>
           
//            <h3 className='price'>price:{ele.price}$</h3>
           
         

//             </div>
           
//           </div>
         
//         ))
//       }
//      </div>
//       <button onClick={Getdata}>get Adviced</button>
      
//     </div>
//   );
// }
// export default App



import React from 'react'
import ContextFetch from './ContextApi2/ContextFetch'
import Home_1 from './ContextApi2/Home_1'
// import ContexApi_1 from "./Assign_ContextApi/ContexApi_1"
// import Home from "./Assign_ContextApi/Home"
// import Axios from './Axios/Axios'
// import Input from './Input'
// import AxioxPut from './Axios_Put_method/AxioxPut'
// import Parient from './LiftingShifting-up/Parient'
// import Registration from './Registration form/Registration'
// import Index from './StateWithObject/Index'
// import UseRef from './UseRef/UseRef'
// import Child from './ContextApi/Child'
// import ContexApi from './ContextApi/ContexApi'
// import ChildCallback from './UseCallback/ChildCallback'
// import State from './State/State'
// import ToDo from './ToDo'
// import UseEffect from './UseEffect/UseEffect'
// import UseEffectexp2 from './UseEffect/UseEffectexp2'

// import Card from './Card'
// import Array from './StateWithArry/Array'
// import Child1 from './Custom Hook/Child1'
// import Child2 from './Custom Hook/Child2'
// import Index from './Custom Hook/Example2/Index'


// import UseReducer from './UseReducer/UseReducer'
// import Text from './TextAreaAssignment/Text'
// import LatterText from './assignmentLetterChk/LatterText'





const App = () => {
  return (
    <div>
      {/* <Card/> */}

      {/* <ToDo/>  */}

      {/* <UseEffect/> */}
      {/* <UseEffectexp2/> */}
      {/* <UseRef/> */}
      {/* <ContexApi>
        <Child/>
      </ContexApi> */}
      {/* <State/> */}
    
    {/* <ChildCallback/> */}
    {/* <Parient/> */}
    {/* <Registration/> */}
    {/* <Index/> */}
      {/* <Array/> */}
      {/* <UseReducer/> */}
      {/* <Child1/>
      <Child2/>
      <Index/> */}
      {/* <Axios/> */}
      {/* <Input/> */}
      {/* <AxioxPut/> */}
      {/* <Text/> */}
      {/* <LatterText/> */}
   {/* <ContexApi_1>
    <Home/>
   </ContexApi_1> */}
   {/* <ContexApi_1/> */}
   <ContextFetch>
    <Home_1/>
   </ContextFetch>
    </div>
  )
}

export default App