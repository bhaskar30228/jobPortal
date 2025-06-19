import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDb=async()=>{
    try{
        mongoose.connection.on("connected",()=>{
            console.log("MongoDB Connection Successful");
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/jobPortal`)
    }catch(err){
        console.error("MongoDB Connection Failed", err);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDb;