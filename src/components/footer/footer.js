import React, { useState } from "react";
import "./style.css"

const Footer=()=>{
    const[isVisible]=useState(false);

    return(
        <div>
            <div  className="fooo"> 
                <div className="foood">
                    <h1>Fooodish</h1>
                    <h1>Menu</h1>
                    <h1>Information</h1>
                    <h1>Contact</h1>
                </div>
                <div className="foo">
                    <div>
                        <h5>Continue Foodish 2023 all rights reserved</h5>
                        <h1>Follow Us On</h1>
                    
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Offer</li>
                            <li>Service</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Menu</li>
                            <li>Quality</li>
                            <li>Make a Choice</li>
                            <li>Salad With Vegetable</li>
                            <li>Fast Delivery</li>
                            <li>Subscribe</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>+254901951098</li>
                            <li>Explore</li>
                            <li>Info@Foodish Com</li>
                            <li>1245,Nairobi Kenya</li>
                        </ul>
                    </div>
                </div>
            </div>






        </div>




    )};
export default Footer