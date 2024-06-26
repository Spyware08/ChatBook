import { Router } from "express";
import { Usermodel } from "../database/db.js";
import HashVerifier from "../function/Hashing/verifyHash.js";
import jwt from "jsonwebtoken";

export const LoginRoute = Router();

LoginRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const exist_user = await Usermodel.findOne({ email });
            if (exist_user) {
                const isPassword = await HashVerifier({ plain_password: password, hashed_password: exist_user.password });
                if (isPassword) {
                    console.log("login");
                    const token = jwt.sign({ name: req.body.exist_user }, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "1d" });
                    // console.log(token);
                    const { email, firstname, image_path, profile_path } = exist_user  //extract data from backend
                    let userdata = { email, firstname, token, image_path,profile_path };
                    console.log(userdata);
                    return res.status(200).json({ userdata, message: "logged in" });
                }
                return res.status(401).send("Wrong Password");
            }
            console.log("user not exist");
            return res.status(404).send("No user found");
        } catch (e) {
            console.error("Error", e);
            return res.status(500).send("Internal Server Error");
        }
    } else {
        return res.status(400).send("Email and password are required");
    }
});
