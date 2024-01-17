require("dotenv").config()
const express = require('express');
const server = express();    
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan =require('morgan')
const userAllRoutes = require("./routes/user/index.routes")
const adminAllRoutes = require("./routes/admin/index.routes")
// const path = require('path');


// DB connection
async function main(){
  await mongoose.connect(process.env.MONGO_DB_URL);
}
main().then(()=>{
  console.log('DB is Connected.....');
}).catch((err)=>{
  console.log(err);
});

//midelware
server.use(morgan('dev'));
server.use(express.json());


server.use("/api/u1",userAllRoutes);
server.use("/api/A1",adminAllRoutes);

server.listen(port ,()=>{
    console.log(`server start at ${port}`)
});