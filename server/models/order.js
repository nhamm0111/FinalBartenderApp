const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    orderName:{

        type: String,
        require:true,

    },

    orderDrinkName:{

        type: String,
        require:true,

    },

    orderComments:{

        type: String,
        require:true,
    }

});//end of orderSchema

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;