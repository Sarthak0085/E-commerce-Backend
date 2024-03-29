// connecting db 
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("ecommerce backend is connected to db");
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
}


export default connectDb;