import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import  './styles/ordersPageStyles.css';
const OrdersPage = () => {

    const [orders, setOrders] = useState([]);
    const [rerender, setRerender] = useState(false);
   

    

    useEffect(() => {

        //Fetch volunteer data from the server
        async function fetchOrders() {

          try {

            const response = await axios.get("http://localhost:3005/GetOrders");

            console.log(response)

  
            
            if(response.data.success) {

              setOrders(response.data.orders);

            } else {

              console.error("error with orders")

            }


            console.log(orders)



          
          } catch (error) {
            console.error("Error:", error);
          }
        }
        fetchOrders();
      }, [])



      async function completeOrder(id){

        console.log("Selected ID: " + id)
        const finished = await axios.delete(`http://localhost:3005/CompleteOrder/${id}`)

        setRerender((prevRerender) => !prevRerender);

        


      }

    return(

        <div>
            
                    
            <h1>Orders</h1>


            <div>

                <Link to='/AddDrink'>
                
                    <button>Add Drink</button>
            
                </Link>

            </div>


            <div>

            {orders && orders.map((order, index) =>(
 
                <div key={index} className="orderSection">

                      <div className="orderInfo">

                        <h4>{order.orderName}</h4>
              
                        <p className="orderDrink">{order.orderDrinkName}</p>

                        
                        <h6>Notes:</h6>
                        <p className="drinkDesc">{order.orderComments}</p>

                        <div className="drinkButtons">

                          <button onClick={() => completeOrder(order._id)}>Order Completed</button>

                        </div>


                      </div>

                      {console.log(order._id)}

                   
  
               </div>



))}

            </div>

        </div>


    );


}//end of orderPage

export default OrdersPage;