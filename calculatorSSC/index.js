// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);