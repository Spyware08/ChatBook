import multer from "multer";

let storage = multer.diskStorage({
    // destination: "./uploadsfile",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
export let upload = multer({ storage: storage })