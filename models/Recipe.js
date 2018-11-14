var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecipeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    directions: {
        type: Array,
        required: true
    },
    createdBy: {
        type: String
    }
}
)

var Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe