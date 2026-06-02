const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use(cors());
app.use(express.static("public"));

app.use("/calculator", calculatorRoutes);
app.use("/mytest", testRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("Server running on port:", port);
});
