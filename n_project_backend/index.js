const express = require('express');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Recipe = require("./model/RecipeModel");
const User = require("./model/UserModel");

const app = express();

mongoose.connect('mongodb+srv://sachinyadav1469:Sachin%40123@cluster0.my3twen.mongodb.net/recipesharing?retryWrites=true&w=majority')
.then(result=>{
    // console.log(result);
    console.log("Connected to DB!")
    app.listen(8000);
})
.catch(err=>{
    console.log("Unable to connect to database!")
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Origin,X-Requested-With,Accept,Authorization,*');
    next();
});

app.get("/all", async (req,res,next)=>{
    console.log("Get Recipes")
    console.log(req.headers);
    return res.json((await Recipe.find({})).map(r=>({id:r._id,name:r.name,description:r.description,ingredients:r.ingredients,imagePath:r.imagePath})));
});

app.put("/save",async (req,res,next)=>{
    await Recipe.deleteMany();
    // console.log(req.body);
    console.log(req.headers);
    if(req.headers["authorization"].length < 20){
        return res.status(400).json({
            message:"Unauthorized"
        })
    }
    let recipes = [];
    for(let recipe of req.body){
        let savedRecipe = await Recipe.create({
            name:recipe.name,
            description:recipe.description,
            imagePath:recipe.imagePath,
            ingredients:recipe.ingredients
        });
        recipes.push(savedRecipe);
    }
    res.json({recipes});
});

app.post("/signup",async (req,res,next)=>{
    const newUser = await User.create({
        email:req.body.email,
        password:req.body.password
    });
    let token;
    try{
         token = jwt.sign({...newUser},"secret");
    } catch(err){
        console.log(err);
        console.log(newUser);
        return res.status(500).json({

            message:"Signup failed"
        });
    }
    res.json({...newUser,token:jwt.sign({...newUser},"secret")})
});

app.post("/signin",(req,res,next)=>{
    console.log("SignIn")
    User.findOne({email:req.body.email,password:req.body.password})
    .then(user=>{
        if(!user){
            return res.status(301).json({
                message:"Invalid credentials"
            });
        }
        setTimeout(()=>{
            res.json({...user,token:jwt.sign({...user},"secret")}
            )
        });
    })
})

