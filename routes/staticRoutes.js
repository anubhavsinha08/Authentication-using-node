const express= require("express");
const Router= express.Router();

Router.get("/",(req,res)=>{
    res.render("home");
})

Router.get("/login",(req,res)=>{
    res.render("login");
})
Router.get("/signup",(req,res)=>{
    res.render("signup");
})

module.exports=Router;