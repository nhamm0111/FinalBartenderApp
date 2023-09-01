const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({

    drinkName:{

        type: String,
        require:true,

    },

    drinkPrice:{

        type: Number,
        require:true,

    },

    drinkDesc:{

        type: String,
        require:true,
    }

});//end of DrinkSchema

const drinkModel = mongoose.model('Drink', drinkSchema);

module.exports = drinkModel;