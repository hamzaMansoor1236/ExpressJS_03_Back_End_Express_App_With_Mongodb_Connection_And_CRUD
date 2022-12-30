const express= require("express");
const app=express();

//specifying port
const port= 5000;

//middleware
app.use(express.json());


//dealing get requests
app.get('/',(req,res)=>{

    console.log("Get request");
    //sebdig response on get request
    res.send({message:"hellow world"})
})


//port 
app.listen(port, (err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
    console.log("App running at port 5000 path  http://localhost:5000/")

    }
} );