const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const recipeSchema = new Schmea({
    name:{
        type:Schmea.Types.String,
        required:true
    },
    description:{
        type:Schmea.Types.String,
        required:true
    },
    imagePath:{
        type:Schmea.Types.String,
        required:true
    },
    ingredients:[
        {
            name:String,
            amount:Number
        }
    ]
});

const Recipe = mongoose.model("Recipe",recipeSchema);
module.exports = Recipe;