import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);


app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running...");
});


const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}


export default app;