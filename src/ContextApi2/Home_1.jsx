import React, { useContext } from 'react'
import { UserData } from './ContextFetch';
import "./Homecss.css"
const Home_1 = () => {
    let data=useContext(UserData);
    console.log(data)
  return (
    <>
      <div className="main-container ">
        <div className="left">
          <span>
            <h4>S'SP</h4>
          </span>
        </div>
        <div className="right">
          <ul className="right_1  ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
            <li>Sign-UP</li>
          </ul>
        </div>
      </div>

      <div className="cards">

        <div className='card-menu'>{
              data.map((el)=>{
              return <div className='card'>
                   <div className='card-image'>
                    <img src={el.images[1]} alt="" />
                   </div>
                   <div className='card-body'>
                    <h5>{el.title}</h5>
                    {/* <h6 className='card-desc'>{el.description}</h6> */}
                    <span>Rating{el.rating}🌟</span>
                    <h6>Discount:{el.discountPercentage}%</h6>
                    <h4>Price:{el.price}$</h4>
                   </div>
                   <button className='card-btn'>Add To</button>
              </div>
                     
              })
            }</div>


        {/* {
        
        data.cart.map((ele) => {
          return (
            <>
              <div className="flex-sm-row-reverse">
                <div>
                  <img className="img" src={ele.url} alt="" />
                </div>
                <h3 key={ele.id}>{ele.id}</h3>
                <h4>{data.y}</h4>
                <button>Add</button>
              </div>
            </>
          );
        })} */}
      </div>
    </>
  )
}

export default Home_1