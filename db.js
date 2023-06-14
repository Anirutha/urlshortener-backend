import mongoose from "mongoose";

//database creation 
export function MongoConnect(){

    const connectionParams ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
   try {

    mongoose.connect("mongodb://127.0.0.1:27017/short", connectionParams)
    console.log("Connected to Mongo")
      
   } catch (error) {
       console.log(error);
   }
}