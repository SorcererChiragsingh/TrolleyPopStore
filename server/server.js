const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");


// 
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");



// 
dotenv.config()
mongoose.connect("mongodb+srv://chiragsingh8926:zDMUDYMoUFFBEmAa@trolleypopstore1.2jyvrht.mongodb.net/TrolleyPopStore1?retryWrites=true&w=majority&appName=TrolleyPopStore1")
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.', err))

const app = express();
const PORT = process.env.PORT || 5000;


// 
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

// 
  app.use(cookieParser());
  app.use(express.json());
  app.use("/api/auth", authRouter);
  app.use("/api/admin/products", adminProductsRouter);
  app.use("/api/admin/orders", adminOrderRouter);
  
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
  