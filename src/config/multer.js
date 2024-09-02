// config/cloudinary.js
dotenv = require("dotenv");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary");
const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "uploads",
		allowed_formats: ["jpg", "png"],
	},
});
const upload = multer({ storage: storage });
module.exports = upload;
