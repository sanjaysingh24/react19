import mongoose from "mongoose";

export const connectDb = async()=>{
    try{
         const connect = await mongoose.connect(`mongodb://localhost:27017/checkaction`);
         if(connect){
            console.log("MongoDB connected successfully");
         }else{
            console.log("MongoDB connection failed");
         }
    }catch(err){
        console.log("DB connection error", err);
    }
}