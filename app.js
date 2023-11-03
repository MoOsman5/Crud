const express = require("express");
const db = require('./config/db');
const rout = require('./routes/router')
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})

app.use(rout)