require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require("path");
const app = express();
const router = require('./server/index');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret : "pubg",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60*60*1000 }
}))
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.set('trust proxy', true)
app.use("/",router)
app.listen(process.env.PORT|| 8000,()=>{
    console.log("App running on port: " + process.env.PORT ||8000)
})