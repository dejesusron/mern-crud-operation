import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});