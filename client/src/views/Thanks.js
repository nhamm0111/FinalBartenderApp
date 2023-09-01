import { Link } from "react-router-dom";
const Thanks = () => {

    return(

        <div>

            <div>

                <h1>Thank You for Your Order</h1>
                <h2>It Will be Ready for You Soon</h2>

            </div>

            <div>

                <Link to="/Menu">
                
                    <button className ="homeButton">Return to Menu</button>

                </Link>


                

            </div>
        </div>

    );

    }

    export default Thanks;