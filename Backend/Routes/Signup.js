
import { Router } from "express";
import { Usermodel } from "../database/db.js";
import { createHashing } from "../function/Hashing/creatingHashing.js";
import dotenv from "dotenv"

dotenv.config()

export let SignupRoute = Router()

async function Userdata(data) {

    try {
        const { password } = data;
        if (password) {
            const hash_password = await createHashing(password);
            if (hash_password) {
                data.password = hash_password;
                console.log(data);
                const user_data = await Usermodel.create(data);
                if (user_data) {
                    console.log("data created in mongo", user_data);
                    return true;
                }
                return false;
            }
        }
    } catch (error) {
        console.error("Error creating user data:", error);
        return false;
    }

}


SignupRoute.post("/signup", async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    // console.log(`data from  post :${firstname} ${lastname} ${email}`);

    if (firstname && lastname && email && password) {
        // console.log("data received with >", req.body);
        const exist_user = await Usermodel.findOne({ email })



        if (exist_user)
            return res.status(409).send("email exist")

        else {
            const insertData = await Userdata(req.body)
            if (insertData) {
                return res.send("created")
            }
            return res.send("error in creating data")
        }
    }

    return res.send("error")
})
