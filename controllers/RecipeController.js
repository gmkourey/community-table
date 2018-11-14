const db = require("../models");

module.exports = {
    createRecipe: function(req, res) {
        db.Recipe
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    getRecipes: function(req, res) {
        db.Recipe
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
}