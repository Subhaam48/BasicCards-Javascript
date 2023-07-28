import React, { useContext } from "react";
import { usercontext } from "./ContexApi_1";
import "./Home.css";

const Home = () => {
  let data = useContext(usercontext);
  console.log("Data ", data);
  console.log("Arrrrr", data.arr);
  return (
    <>
      <div className="main-container ">
        <div className="left">
          <span>
            <h4>S'sP</h4>
          </span>
        </div>
        <div className="right">
          <ul className="d-flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
            <li>Sign-UP</li>
          </ul>
        </div>
      </div>

      <div className="cards">
        {
        
        data.map((ele) => {
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
        })}
      </div>
    </>
  );
};

export default Home;
