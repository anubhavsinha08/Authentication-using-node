const express = require("express");
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const userRouter= require("./routes/user")
const mainRouter= require("./routes/mainRouter")
const staticRoutes= require("./routes/staticRoutes");
const ristrictToUserLogin= require("./middlewares/auth")
const cookieParser = require("cookie-parser");

const PORT = process.env.Port || 8080;
const ConnectDb= require("./config/db")

dotenv.config();
ConnectDb();

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


 
// app.get('/', (req, res) => {
//   res.render("home");
// });


app.use("/",staticRoutes);
app.use("/user",userRouter);
app.use("/main",ristrictToUserLogin,mainRouter)


app.listen(PORT,()=>{
    console.log("http://localhost:8080/")
})