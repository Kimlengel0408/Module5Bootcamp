// app.js - new file at top level
const express = require("express");
const app = express();
const port = 3000;
// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);
// export the app
module.exports = app;

// index.js - updated version
// import the app
const app = require("./app");
const port = 3000;
// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`);
});
