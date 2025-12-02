import { User } from "../models/usermodel.js";


export const createuser = async(req,res)=>{
    const{name,email} = req?.body;
    try{
        const existingUser = await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User with this email already exists"});
        }
        else{
            const newUser = new User({name,email});
            await newUser.save();
           return res.status(201).json({message:"User created successfully", user:newUser});
        }
        
    }catch(err){
        res.status(500).json({message:"Error creating user", error:err.message});
    }
}