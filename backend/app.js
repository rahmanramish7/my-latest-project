import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;




// // app.js
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config({ path: './config.env' });

// const app = express();

// // Get environment variables
// const MONGO_URI = process.env.MONGO_URI;

// // Check if MONGO_URI is defined
// if (!MONGO_URI) {
//     console.error('MONGO_URI is not defined in the environment variables.');
// }

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Some error occurred while connecting to the database:', err));

// // Other middleware and routes can go here

// export default app;
