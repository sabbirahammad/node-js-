const ap=require('./app');
const port=3000;

ap.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});