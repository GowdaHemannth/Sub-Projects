const mongoose=require("mongoose")

const connectToDB=async()=>{
    try{
           await mongoose.connect(process.env.MONGODB_URI);
           console.log("MongoDb Connected Succesfully");
    }
    catch{
      console.log("Error While Creating the Connection");
    }
 

}
module.exports=connectToDB;