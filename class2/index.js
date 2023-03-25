const fs=require('fs');


//creat file,,
//file system('file name',data,error function(){
 //   call back;
//});


// fs.writeFile('nodefile','my name is sabbir ahammad',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("successfull");
//     }
// })



//data add,,
//file system('file name',data,error function)


// fs.appendFile('nodefile',' iam 23 years old',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("successfull");
//     }
// })

//readfile,,mane file er data output show korbe,,

// fs.readFile('nodefile','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })


//rename,file er name change,,

// fs.rename('nodefile','nodefile2',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("successfull");
//     }
// })

//delate file,,

fs.unlink('nodefile2',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("successfull");
    }
})