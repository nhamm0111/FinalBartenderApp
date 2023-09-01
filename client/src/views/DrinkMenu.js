import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Cart from '../views/Cart';
import  './styles/drinkMenuStyles.css';

const DrinkMenu = () => {

    const navigate = useNavigate();
    const [drinks, setDrinks] = useState([]);
    const [choice, setChoice] = useState({});
   const [showCart, setShowCart] = useState(false);
     // Rerender the opportunities when one is updated
  const [rerender, setRerender] = useState();
    

    useEffect(() => {


        //Fetch volunteer data from the server
        async function fetchDrinks() {

          try {

            const response = await axios.get("http://localhost:3005/GetMenu");

            console.log(response)

  
            
            if(response.data.success) {

              setDrinks(response.data.drinks);

            } else {

              console.error("error with drinks")

            }



          
          } catch (error) {
            console.error("Error:", error);
          }
        }
        fetchDrinks();
      }, [])



      async function completeSelect(drinkName){
        
        setChoice(drinkName);

        console.log(choice);
        setShowCart((showing) => !showing);

      }
      
 
      {if(showCart === true){

        return(

          <Cart data={choice} setRerender={setRerender} setShowCart={setShowCart}/>
        );



      } else {

          
    return(
      <div>


          <h1>Drink Menu</h1>

          <div className="drinksMenu">

              {drinks && drinks.map((drink, index) =>(

                <div key={index} className="drinkSections">


             
            
                    <div className="drinkInfo">

                    
                    <div className="topSection">

                      <h4 className="drinkNames">{drink.drinkName}</h4>

                      <button onClick={() => completeSelect(drink.drinkName)}>Add to Order</button>

                    </div>



                    <div className="midSection">
                      
                        <h5 className="drinkPrices">{drink.drinkPrice}$</h5>

                    </div>



                    <div className="bottomSection">

                     <div>
                      <label>Comments:</label>
                      </div> 
                     
                      <p className="drinkDesc">{drink.drinkDesc}</p>

                    </div>
                  

  

                  </div>

                                    
                    
                  
                </div>

                  


              ))}

          </div>

      </div>



  );}

        
      }


}//end of menu

export default DrinkMenu;