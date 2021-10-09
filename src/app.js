const express = require("express");

//Databse Create Connction required
// require("./DB/conn");
// require("src/public/DB");

const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const hbs = require("hbs");
const {registerPartials} = require("hbs");


//now using body-parser is using post method
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


// setting the path
// console.log(path.join(__dirname,"../public"));

const staticpath = path.join(__dirname,"./public");

//templates path
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

//middleware
app.use('/assets',express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.static(staticpath));

//templates path
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);



// That is  Basic  Routing

app.get("/",(req,res) =>{
    res.render("index");
})

app.get("/about",(req,res) =>{
    res.render("about");
})


app.get("/contact",(req,res) =>{
    res.render("contact");
})

app.get("/bmi",(req,res) =>{
    res.render("bmi");
})

app.get("/lmap",(req,res) =>{
    res.render("lmap");
})


app.post("/bmi",(req,res) =>{
    // console.log(req.body);

    let w1 = Number(req.body.w1);
    let h1 = Number(req.body.h1);

    let bmi = w1 / (h1*h1);
   
    res.send(`<h1> Your Body Mass Index is : ${bmi} </h1>`);

    // res.send("Your Body Mass Index is:"+bmi);

})

//that is api post method

app.post("/contact",(req,res) =>{
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let mobile =req.body.mobile;
    let msg = req.body.msg;
    res.send(`<h2> My Name is : ${name} <br/>  My Email is: ${email} <br/> My Mobile Number is :${mobile} <br/> My msg is :${msg} </h2>`);
})



app.get("/api",(req,res) =>{
    res.render("api");
})


// That is Server is Create
app.listen(port,()=>{
    console.log( `Node Server is Running For http://localhost:${port}`);
})