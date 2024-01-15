const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const path = require("path");

dotenv.config();
connectDb();

//rest object
const app = express();

//middleqares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//route
//user route
app.use("/api/v1/users", require("./routes/userRoutes"));
//transection route
app.use("/api/v1/transections", require("./routes/transectionRoute"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = process.env.PORT || 8000;

//listen server
app.listen(port, () => {
  console.log(`server runnig on port ${port}`);
});
