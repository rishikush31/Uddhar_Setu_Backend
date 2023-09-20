require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();


//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}

//bodyParser
// const auth = (req,res,next)=>{

//   try{
//     const token = req.get('Authorization').split('Bearer ')[1];
//     console.log(token);
//     var decoded = jwt.verify(token,publicKey);
//     if(decoded.email){
//       next()
//     }else{
//       res.sendStatus(401)
//     }
//   }catch(err){
//     res.sendStatus(401)
//   }
//   console.log(decoded)


// };

server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({extended:true}));
server.get('/', (req, res) => { res.send("okay") });

server.listen(process.env.PORT||3000, () => {
  console.log('server started');
});
