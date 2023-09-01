import { Link } from "react-router-dom";
import  './styles/homepageStyles.css';
const Homepage = () => {

    return(

        <div>

            <div>

                <h1>Eden Hall</h1>

            </div>

            <div className="displayArea">

                <div className="homepageButtonSections">

                        
                    <Link to="/Menu">
                    
                        <button className ="homepageButtons">Menu</button>

                    </Link>

                    
                </div>


                <div className="homepageButtonSections">

                    <Link to="/Orders">
                    
                        <button className ="homepageButtons">Orders</button>

                    </Link>
                    
                </div>


                


                

            </div>
        </div>

    );


}//end of homepage 

export default Homepage;