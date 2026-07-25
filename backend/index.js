require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")
const passport = require("passport-local-mongoose")

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();


app.listen(port, ()=>{
  console.log("Server is listen on port 3001");  
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error("DB connection error:", err));

})