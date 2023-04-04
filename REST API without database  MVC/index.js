
const bpp=require('./app');

const port=3000;

bpp.listen(port,()=>{
    console.log(`this server is running:http://localhost:${port}`);
})