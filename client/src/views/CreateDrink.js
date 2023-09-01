import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import  './styles/createDrinkStyles.css';

const CreateDrink = () => {

    const navigate = useNavigate();

    const formData = yup.object().shape({

        drinkName: yup.string().required('A drink name is required'),
        drinkPrice: yup.number("must be a number"),
        drinkDesc: yup.string()

    });

    const {
        //Functions for registering input functions to me assigned and checked by yup resolver:
        register,
    
        //Function for handling the submit of the input of the desired from:
        handleSubmit,
    
        //Function for obtaining the information from yupResolver on what errors occurred during input validation:
        formState: { errors },
      } = useForm({ resolver: yupResolver(formData) });


      //Function for what to do for the submission of the form:
  async function onSubmit(data) {
        try {
        //Post request to the server using axios:
        const response = await axios
            .post(
                "http://localhost:3005/CreateDrink", data
            );

            navigate("/Orders", { replace: true })
            
        } catch (error) {
        console.error("Error:", error);
        }

    }
    return(

        <div className="createDrinkPage">

            <h1>Create Drink</h1>

            <div className="CreateDrinkForm">

                <form className='drinkForm' onSubmit={handleSubmit(onSubmit)}>

                <div className="drinkInputSections">

                <label className="drinkFormLabels">Drink Name</label>

                    <input
                    className="drinkInput"
                    type="text"
                    placeholder="Drink Name"
                    {...register("drinkName")}
                    />

                </div>

                <div className="drinkInputSections">

                <label className="drinkFormLabels">Drink Price</label>

                    <input
                    className="drinkInput"
                    type="number"
                    min="0.00" 
                    max="10000.00" 
                    step="0.01"
                    placeholder="Drink Price"
                    {...register("drinkPrice")}
                    />
                    
                </div>

                <div className="drinkInputSections">

                <label className="drinkFormLabels">Drink Description</label>

                    <input
                    className="drinkInput"
                    type="string"
                    placeholder="Drink Description"
                    {...register("drinkDesc")}
                    />
                    
                </div>

                <div className="drinkButtonArea">

                    <div className="createAccountSubmit">

                        <button onClick={handleSubmit}>Submit</button>

                        <button type="reset">Clear</button>

                        <Link to="/Orders">
                            <button className="return-btn">Return</button>
                        </Link>

                    </div>

                </div>

                </form>


            </div>


        </div>




    );


}//end of createDrink

export default CreateDrink;