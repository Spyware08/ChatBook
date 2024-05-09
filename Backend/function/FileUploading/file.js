import { Router } from "express";
import { Usermodel } from "../../database/db.js";
import { upload } from "./multer.js";
import cloudinary from "./Cloudinary.js";

export const Filedata = Router();
const CLOUDINARY_FOLDER = "ChatBook_images/User_images";

Filedata.post('/upload_file', upload.single("image"), async (req, res, next) => {
    try {
        const file = req.file;
        const result = await cloudinary.uploader.upload(file.path, { folder: CLOUDINARY_FOLDER });

        const existingUser = await Usermodel.findOne({ email: req.headers.authorization });
        if (!existingUser) {
            return res.status(404).send("User not found");
        }

        existingUser.image_path.unshift(result.secure_url); 
        await existingUser.save();
        
        return res.status(200).send("Profile updated successfully");
    } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).send("Internal Server Error");
    }
});

Filedata.get("/get_image_paths", async (req, res) => {
    const useremail = req.query.userId;

    try {
        const user = await Usermodel.findOne({ email: useremail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const imagePaths = user.image_path;
        const imageData = [];

        for (let i = 0; i < imagePaths.length; i++) {
            const imagePath = imagePaths[i];
            const base64ImgStr = imagePath;

            imageData.push(base64ImgStr);
        }

        if (imageData.length === 0) {
            return res.status(400).send("No images found for this user.");
        }

        res.json({ imageData });
    } catch (error) {
        console.error('Error fetching image paths:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
