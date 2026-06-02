const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World");
});

router.get("/test2", (req, res) => {
  res.send("Second test");
});

router.get("/add", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

module.exports = router;
