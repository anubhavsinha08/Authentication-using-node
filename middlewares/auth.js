const {getUser}=require("../service/auth")

async function ristrictToUserLogin(req,res,next){
   const  userUid=req.cookies?.uid;

   if(!userUid) return res.redirect("/login");
   const user =  await getUser(userUid);
   console.log(user);

   if(!user) return res.redirect("/login");

   req.user=user;
   next();
}

module.exports= ristrictToUserLogin;