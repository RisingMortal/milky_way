const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(express.json());

const URL = process.env.MONGODBURI;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb is up and running!");
});

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
    }
);

