const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3021;

const app = express();
const uri = "mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/Biblioteca_Ranchito?retryWrites=true&w=majority"

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

