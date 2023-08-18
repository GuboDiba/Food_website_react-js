import React, { useState } from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blackman from './images/blackman.jpeg'
import im1 from './images/im1.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import firstburger from './images/firstburger.jpeg'
import chickenpizza from './images/Chickenpizza.jpeg'
import frenchfries from './images/frenchfries.png'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import chickenbb from './images/chickenbb.jpeg';
import chickenpizzaa from './images/chickenpizzaa.jpeg'
import chickenfriesss from './images/chickenfriesss.jpeg';
import Grillsandwhich from './images/Grillsandwhich.jpeg'
import toco from './images/toco.jpeg'
import noddles from './images/noddles.jpeg'
import discount from './images/discount.jpeg'
import offerimg from './images/offerimg.jpeg'
import tortilla from './images/tortilla.jpeg'




const Homepage = ()=>{
    const[isVisible]=useState(false);


    const foodItems = [
        {
          name: 'Chicken Burger',
          price: '$3.50',
          image: chickenbb,
        },
        {
         name: 'Chicken Pizza',
         price: '$4.20',
         image:chickenpizzaa
        },
        {
            name: 'Chicken Fry',
            price: '$5.00',
            image:chickenfriesss
        },
        {
            name: 'Grill Sandwich',
            price: '$4.80',
            image:chickenpizzaa
        },
        {
            name: 'Toco Traifi',
            price: '$3.63',
            image: chickenfriesss
        },
        {
            name: "Noddle's Romen",
            price: '$6.50',
            image: chickenbb
        }
      ];
    return(
        <div>
            <div className="foodle1">
                <div>
                <h1 className="afast">All Fast Food is <br/>Available at Foodle</h1>
                <div className="bman">
                    <img src={blackman} alt="blackman" className="bbm"></img>
                    <p>We Are Just A click Away When You <br/> Crave For Delicious Fast Food</p>
                </div>
                <button className="btn1">
                    <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    Buy Now</button>
                </div>
                <img src={im1} alt="im1" className="image1"></img>

            </div>
            <div className="sndicon">

                <div className="delivery">
                    <div>
                    <FontAwesomeIcon icon={ faRocket} className="icon-page" /> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Fast Delivery</h2>
                    <p>The Food Will Be Delivered to <br/>Your Home Within 1-2 Hours of<br/> Your Ordering</p>
                    </div>
                </div>
                <div className="delivery">
                    <div>
                    <FontAwesomeIcon icon={faLeaf} className="icon-page"/> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Fresh Food</h2>
                    <p>Your Food Will Be Delivered <br/> 100% Fresh To Your Home We<br/>  Do Not Deliver Stale Food</p>
                    </div>
                </div>
                <div className="delivery"> 
                   <div>
                    <FontAwesomeIcon icon={faTruck} className="icon-page"/> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Free Delivery</h2>
                    <p>Your Food Delivery is<br/>  Absolutely Free No Cost <br/> Just Order And Enjoy</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="bestcategory">
                <h1>Best <span>Delivery</span><br/> Categories</h1>
                <p>Here Are Some Of Our Best Distributed <br/> Categories.If You Want You Can Order <br/> From Here.</p>
                </div>
                <div className="chicken">
                    <div>
                        <img src={firstburger} alt="firstburger" className="ffst"></img>
                        <h2>Chicken Burger</h2>
                        <p>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                    <div>
                        <img src={chickenpizza} alt="firstburger" className="ffst"></img>
                        <h2>Chicken Pizza</h2>
                        <p>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />

                        </p>
                    </div>
                    <div>
                        <img src={frenchfries} alt="firstburger" className="ffst"></img>
                        <h2>Chicken Burger</h2>
                        <p>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />

                        </p>
                    </div>
                </div>
            </div>

            <div className="regular">
                <p>
                    <h1>Our <span>Regular</span> Menu</h1>
                    There Are Our Regular Menus.You Can <br/> Order Anything You Like
                </p>
                <button>See All</button>
            </div>
            
             <div className="itemm">
                {foodItems.map((item, index) => (
                 <div key={index}>
                    <img src={item.image} alt={item.name} className="imagename" />
                     <h1>{item.name}</h1>
                     <h2>{item.price} <button className="buynow">Buy Now</button></h2>
                </div>
                      ))}
            </div>
            
            <div className="offers">
                <div>
                <img src={discount} className="dis"></img>
                <h1 className="tweety">25% <br/> Discount</h1>
                </div>
                <div>
                    <div>
                    <img src={offerimg} className="offe"></img>
                    <h2 className="save3">$3.80</h2>
                    <h1 className="save20">Save <br/> 20%</h1>
                    </div>
                    <div>
                        <img src={tortilla} className="tor"></img>
                        <h1 className="torrr">Tortilla Warp Tocos</h1>
                        <h2>Get Your Order Fresh</h2>
                        <h1 className="fifteen">15% <br/> off</h1>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Homepage