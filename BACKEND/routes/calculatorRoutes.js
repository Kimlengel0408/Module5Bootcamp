const express = require("express");
const calculatorController = require('../controllers/calculatorController');
const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req,res)
});


module.exports = router;
