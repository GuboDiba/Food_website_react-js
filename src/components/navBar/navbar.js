import React, { useState } from "react";
import "./style.css";


const NavBar = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className="top">
        <div className={`nav-list ${isVisible && "visible"}`}>
            <a className="foole"> Foodle</a>
              <a href="/">Home</a>
             <a href="/Offer">Offer</a>
            <a href="/Service">Service</a>
            <a href="/Menu">Menu</a>
            <a href="/AboutUs">About Us</a>

            <div className="sign">
            <a href="/AboutUs">Login</a>
            <button>SignUp</button>

            </div>


            </div>
         
        </div>
    );
};
export default NavBar;