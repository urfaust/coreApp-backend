module.exports = app => {
    const categories = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
    
    // Retrieve all Categories
    router.get("/", categories.findAll);
  
    // Retrieve a single Category with id
    router.get("/:id", categories.findOne);
  
    app.use('/api/categories', router);
  };