import { Router } from "express";
import { Usermodel } from "../../database/db.js";
import { upload } from "./multer.js";
import cloudinary from "./Cloudinary.js";

export const Profile_picture = Router();
const CLOUDINARY_FOLDER = "ChatBook_images/Profile";

Profile_picture.post('/profile_pic', upload.single("image"), async (req, res, next) => {
    try {
        const file = req.file;
        const result = await cloudinary.uploader.upload(file.path, { folder: CLOUDINARY_FOLDER });

        const existingUser = await Usermodel.findOne({ email: req.headers.authorization });
        console.log(existingUser);
        if (!existingUser) {
            return res.status(404).send("User not found");
        }
        else {
            existingUser.profile_path=result.secure_url;
            await existingUser.save();
        }
        const {  profile_path } = existingUser  

        let userdata = { profile_path };
        console.log(userdata);
        return res.status(200).json({ userdata, message: "Profile uploaded" });
    } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).send("Internal Server Error");
    }
});


