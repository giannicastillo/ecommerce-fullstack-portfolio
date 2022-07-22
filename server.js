const express = require("express");
const app = express();
const port = 8000;
//cors import -> this will allow our back end api to communicate with the front end applicaiton
const cors = require("cors"); //cross origin resource sharing (cors)

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

//tell the server to run the code in the mongoose.config.js file 
require("./server/config/mongoose.config")

//tell the server to run the connect to the route file 
require("./server/routes/ecom.routes")(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );