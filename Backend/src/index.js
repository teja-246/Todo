import dotenv from 'dotenv';
import {app} from './app.js';
import mongoose from 'mongoose';

dotenv.config({path: './.env'});

(async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)

        app.listen(process.env.PORT || 8000, ()=>{
        })
    }
    catch (error) {
        process.exit(1)
    }
})()