const express = require("express");
const app = express();
const testRoutes = require('./routes/myTestRoutes');

app.use('/mytest', testRoutes);

app.use('/', express.static('public'))

app.listen(3000, () => {

  console.log("Server running");

});