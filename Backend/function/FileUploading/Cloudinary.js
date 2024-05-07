import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

cloudinary.config({
    cloud_name: process.env.cloudname,
    api_key: process.env.apikey,
    api_secret: process.env.apisecret
});

export default cloudinary;
