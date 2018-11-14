var router = require("express").Router();
var recipeController = require("../../controllers/RecipeController");

router.route("/recipes")
    .get(recipeController.getRecipes)
    .post(recipeController.createRecipe)

module.exports = router;