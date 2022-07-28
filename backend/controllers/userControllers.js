const asyncHandler  = require ("express-async-handler");
const User = require ("../models/userModel");
const { generateToken } = require("../utils/generateToke");


const registerUser= asyncHandler(async (req, res) => {
 const { firstName , lastName, email, password ,dateOfBirth } = req.body;


const userExists = await user.findOne({email});
if (userExists) {
   res.status(404);
   throw new Error("User already exists");
 }

 const user = await User.create({
   firstName,
   lastName,
   email,
   password,
   mobileNumber,
   dateOfBirth
   
 });

 if (user) {
   res.status(201).json({
     _id: user._id,
     firstName: user.firstName,
     lastName: user.lastName,
     email: user.email,
     mobileNumber:user.mobileNumber,
     dateOfBirth:user.dateOfBirth,
     isAdmin: user.isAdmin,
     
     token :generateTokenken(user._id),
   
   });
 } else {
   res.status(400);
   throw new Error("User not found");
 }
});

const authUser= asyncHandler(async (req, res) => {
   const { firstName , lastName, email, password  } = req.body;
  
const user = await user.findOne({ email});

if(user && (await user.matchPassword(password))){

   res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber:user.mobileNumber,
      dateOfBirth:user.dateOfBirth,
      isAdmin: user.isAdmin,
      token :generateTokenken(user._id),

   })
}else {
   res.status(400);
   throw new Error("Invalid email or password!");
 }

});  
 

 //

module.exports = { registerUser};