import dotenv from 'dotenv';
import {app} from './app.js';
import mongoose from 'mongoose';

dotenv.config({path: './.env'});

(async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\n MONGODB connected. DB HOST: ${connectionInstance.connection.host}`);

        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.log("Error connecting to MongoDB: ", error);
        process.exit(1)
    }
})()