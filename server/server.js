const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
app.use(express.json());

const orderModel = require('./models/order.js');
const drinkModel = require('./models/drink.js');


require('dotenv').config()

// Connecting to database using a connect string
mongoose.connect("/EdenHall");

  app.post("/CreateDrink", async (req, res) => {
    try {
      const {

            drinkName,
            drinkPrice,
            drinkDesc,

      } = req.body;
  
      const newDrink = new drinkModel({

        drinkName:drinkName,
        drinkPrice: drinkPrice,
        drinkDesc: drinkDesc


      });
  
      await newDrink.save();
  
      res.json({ success: true, message: "Drink created" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Error creating Drink" });
    }
  });



  app.post("/CreateOrder", async (req, res) => {
    try {
      const {

            orderName,
            orderDrinkName,
            orderComments,

      } = req.body;
  
      const newOrder = new orderModel({

        orderName:orderName,
        orderDrinkName: orderDrinkName,
        orderComments: orderComments


      });
  
      await newOrder.save();
  
      res.json({ success: true, message: "Order created" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Error creating Drink" });
    }
  });



  app.get("/GetMenu", async (req, res) => {

    try {
      
      const drinks = await drinkModel.find();

      res.json({ success: true, drinks });



    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({ success: false, message: "Error fetching menu" });
    }
  });


  app.get("/GetOrders", async (req, res) => {

    try {
      
      const orders = await orderModel.find();

      res.json({ success: true, orders });



    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({ success: false, message: "Error fetching orders" });
    }
  });



  app.delete("/CompleteOrder/:id", async (req, res) => {
    try {
      const orderId = req.params.id; // Access the id parameter from req.params
  
      // Now you can use orderId to find and delete the order with that ID

      console.log(orderId)
  
      await orderModel.findByIdAndDelete(orderId);
  
      res.json({ success: true, message: "Order deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error deleting Order" });
    }
  });



  app.listen(3005, () => {
    console.log(`Server is running`);
  });