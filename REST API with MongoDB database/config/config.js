require('dotenv').config();

const dev={
   app:{
    port:process.env.port||4000,
   },
   db:{
    url:process.env.DB_URL||'mongodb://localhost:27017/useraDemoDB'
   }
}
module.exports=dev;