import {Route, Routes } from 'react-router-dom';
import Homepage from '../views/Homepage';
import Cart from '../views/Cart';
import DrinkMenu from '../views/DrinkMenu';
import Thanks from '../views/Thanks';



const CustomerRoutes = () => {

    return(


            <Routes>

                <Route path ='/' element={<Homepage/>}/>
                <Route path ='/Menu' element={<DrinkMenu/>}/>
                <Route path ='/Cart' element={<Cart/>}/>
                <Route path='/Thanks' element={<Thanks/>}></Route>


            </Routes>


    );




}//end of CustomerRoutes components


export default CustomerRoutes;