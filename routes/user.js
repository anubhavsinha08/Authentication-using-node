const express= require("express");
const Router= express.Router();
const{handleUserSignup}= require("../controllers/user")

Router.post("/",handleUserSignup);


module.exports=Router;