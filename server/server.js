const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");



dotenv.config()
mongoose.connect(process.env.MONGODB_CONN, { dbName: 'TrolleyPopStore1' })
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.', err))

const app = express();
const PORT = process.env.PORT || 3000;


app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );


  app.use(cookieParser());
  app.use(express.json());
  
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
  