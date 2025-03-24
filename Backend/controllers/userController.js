import validator from 'validator';
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const createToken = (id) => {
     return jwt.sign({id},process.env.JWT_SECRET)
}


// Route for use login
const loginUser = async (req,res) => {


}

// Route for user registeration
const registerUser = async (req,res) =>{
      try {
           const {name, email, password} = req.body;
        //   checking user already exists or not
          const exists = await userModel.findOne({email});
          if(exists){
            return res.json({success:false,message:"User already exists"})
          }
//  validatin email formate or strong password
          if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
          }
          if(password.length < 8){
            return res.json({success:false,message:"Please enter a strong password"})
          }
  // hashing user password
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password,salt)

       const newUser = new userModel({
        name,
        email,
        password:hashedPassword
       })

       const user = await newUser.save()

       const token =  createToken(user._id)

       res.json({success:true,token})


      } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
      }
 

}

// Route for admin login
const adminLogin = async (req,res) =>{

}

export {loginUser,registerUser,adminLogin}