
const exp = require("express");
const app = exp();
const path= require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

let clientName="";
let mobile="";
let email="";
let address="";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


let PORT = process.env.PORT || 7010;

app.get("/main.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/main.html"));
});

app.post("/main.html", (req,res)=>{
    console.log(req.body);
    clientName = req.body.firstname;
    mobile = req.body.mobile;
    email = req.body.email;
    address = req.body.address;

    res.write(fs.readFileSync("../Client/welcome.html").toString().replace("{MobileNumber}", mobile).replace("{clientName}", clientName)
    .replace("{Email}", email).replace("{Address}", address));

});

app.get("/style.css",(req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/style.css"));
});

app.get("/welStyle.css",(req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/welStyle.css"));
});

app.get("/welcome.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client/welcome.html"));
});

app.listen(PORT, ()=>{console.log("http://www.localhost:" + PORT)});