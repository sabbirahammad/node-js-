const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000;

//connected 1,or,

try {
    mongoose.connect('mongodb://localhost:27017/servername');
    console.log('DB is connected');
} catch (error) {
    console.log('DB is not connected');
    console.log(error);
    process.exit(1);
}

//connected asinc,,

// const connectdb=async()=>{
//     try {
//         await  mongoose.connect('mongodb://localhost:27017/servername');
//         console.log('DB is connected');
//     } catch (error) {
//         console.log('DB is not connected');
//          console.log(error.massage);
//        process.exit(1);
//     }
// }
app.get('/',(req,res)=>{
    res.send('this is home page:')
})
app.listen(port, ()=>{
    console.log(`this server is running:http://localhost:${port}`);
    // await connectdb();
});