const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const URL =
  "mongodb+srv://ridalak027:rida2004@cluster0.ytjp4yt.mongodb.net/ClusterO?retryWrites=true&w=majority";
const cors = require("cors");
const todoRouter = require("./Router/todo");

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}));

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(URL);
    console.log("connected to MongoDB");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

connectDB();

app.use("/", todoRouter); //API

app.listen(5050, function () {
  console.log("Server Running");
});
