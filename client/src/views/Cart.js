import {useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import  './styles/cartStyles.css';

const Cart = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [newOrderDrinkName, setNewOrderDrinkName ]= useState();
    const [newOrderName, setNewOrderName] = useState();
    const [newOrderComments, setNewOrderComments] = useState();

    

    async function orderSubmit(event) {


        console.log("NewOrderDrinkName" + newOrderDrinkName);

        const formData = {
          orderDrinkName: props.data,
          orderName: newOrderName,
          orderComments: newOrderComments
        };
    
        console.log("FormData: ", formData);
    
        try {


          const response = await axios.post(
            "http://localhost:3005/CreateOrder",
            formData
          ).then( 
            navigate("/Thanks"));



          console.log("Response:", response.data);
        } catch (error) {
          console.error("Error:", error.message);
        }
      }

      async function returnToMenu(){

          props.setShowCart(false)


          props.setRerender((prevRerender) => !prevRerender);

      }
    
      

    return(
        
        <div>

            <h1>Cart</h1>


            <div>
                

                <form className='drinkForm'>

                    <h4>Your drink is a {props.data}</h4>

                    <div className='orderInputSec'>

                    <label className="orderLabels">Name for the order</label>

                    <input

                        type="text"
                        id="orderName"
                        placeholder="First and Last Name"
                        value={newOrderName}  // Corrected value attribute
                        onChange={(e) => setNewOrderName(e.target.value)}
                        required
                    />

                    </div>

                    <div className='orderInputSec'> 
                    
                    <label className="orderLabels">Comments about your order</label>

                    <input
                        type="text"
                        id="comments"
                        placeholder="Comments"
                        value={newOrderComments}
                        onChange={(e) => setNewOrderComments(e.target.value)}
                        required
                        />

                    
                    </div>

             

                    <div className="cartButtons">

                        <button onClick={orderSubmit}>Complete Order</button>

                        <button type="reset">Clear</button>

                            <button className="return-btn" onClick={returnToMenu}>Return</button>
                        

                    </div>
                   
               
                </form>

            </div>

        </div>




    );


}//end of cart

export default Cart;