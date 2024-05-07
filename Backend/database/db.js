import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"
dotenv.config()

const User = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    image_path: [{ type: String }]
})

export const Usermodel = mongoose.model("UserData", User)

export async function connectDB() {
    try {
        await mongoose.connect(process.env.Database_url)

        const db = mongoose.connection.useDb('ChatBook');
        console.log("Connected ChatBook database");

    }
    catch (err) {
        console.log("error with ", err);

    }
}