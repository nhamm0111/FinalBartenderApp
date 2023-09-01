import {Route, Routes } from 'react-router-dom';
import OrdersPage from '../views/OrdersPage';
import CreateDrink from '../views/CreateDrink';




const CustomerRoutes = () => {

    return(


            <Routes>

                <Route path ='/Orders' element={<OrdersPage/>}/>
                <Route path ='/AddDrink' element={<CreateDrink/>}/>
              

            </Routes>


    );




}//end of CustomerRoutes components


export default CustomerRoutes;