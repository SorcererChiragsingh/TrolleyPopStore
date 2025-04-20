import { v2 as cloudinary } from 'cloudinary';
const multer = require("multer");
// import dotenv from 'dotenv'
// dotenv.config()

// Configuration
cloudinary.config({
  cloud_name: "djzdkekv4",
  api_key:  "795627666361361",
  api_secret:  "flWTM4D3mqm3ts71da6izP1jbnA",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

export default cloudinary
