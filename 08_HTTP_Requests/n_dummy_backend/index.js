const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Origin,X-Requested-With,Accept,Authorization');
    next();
})

let posts = [];

app.get("/",(req,res,next)=>{
    setTimeout(()=>{
        // return res.json(posts);
        return res.status(400).json({
            msg:"Error"
        })
    },2000)
});


app.post("/create",(req,res,next)=>{
    posts.push(req.body);

        return res.status(200).json({
            message:"Post Created Succesfully"
        })
    
})

app.listen(8000,()=>{
    console.log("server started");
});