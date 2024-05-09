import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";
import { SignupRoute } from "./Routes/Signup.js";
import { LoginRoute } from "./Routes/Login.js";
import { Filedata } from "./function/FileUploading/file.js";
import { Profile_picture } from "./function/FileUploading/Profile_uploading.js";

const app = express()
const port = 8080
const cors_options = {
    origin: ["http://localhost:3000","http://192.168.1.3:3000" ],
    credentials: true,
};


connectDB()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors(cors_options))


app.use(LoginRoute)
app.use(SignupRoute)
app.use(Filedata)
app.use(Profile_picture)

app.listen(port, () => console.log("port is on ", port))