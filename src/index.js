import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: "./.env" });

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

// Sync Database
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
