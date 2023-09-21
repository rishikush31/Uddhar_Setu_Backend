require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
const userRouter = require('./routes/user')
const agencyRouter = require('./routes/agency')
const alertRouter=require("./routes/alert")
const requestRouter=require("./routes/request")
const responseRouter=require("./routes/response")
//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}

server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({extended:true}));
server.get('/', (req, res) => { res.send("okay") });
server.use('/user',userRouter.router)
server.use('/agency',agencyRouter.router)
server.use('/alert',alertRouter.router)
server.use('/request',requestRouter.router)
server.use('/response',responseRouter.router)

server.listen(process.env.PORT||3000, () => {
  console.log('server started');
});
