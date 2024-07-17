
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken")
const {User} = require("../models/user.model.js")
// const { Reading } = require("../models/reading.model");



// register controler
 const Register = async (req,res)=>{
    try{
        const {name, email, password } = req.body;
        // basic validation
        if (!name || !email || !password ) {
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        }
        const user = await User.findOne({email});
        if (user) {
            return res.status(401).json({
                message:"User is already exist",
                success:false
            })
        }

        const hashedpassword = await bcryptjs.hash(password,16);

        await User.create({
            name,
            email,
            password:hashedpassword,
        });
        
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })

    } catch(error){
        console.log(error)
    }
}

// Login page controler 
 const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        }
        const user = await User.findOne({email});
        console.log(user)
        if (!user) {
            return res.status(401).json({
                message:"Incorrect Email or Password",
                success:false
            })
        }
        const ismatch = await bcryptjs.compare(password,user.password);
        if (!ismatch) {
            return res.status(401).json({
                message:"Incorrect Email or Password",
                success:false
            })
        }
        const tokenData = {
            userId:user._Id
        }
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});
        return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
            message:`welcome back ${user.name}`,
            user,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

// Logout page controler
 const Logout = (req,res)=>{
    return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
        message:"User Logged out successfully",
        success:true
    });
}

module.exports = {
    Register,
    Login,
    Logout,
}