import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { registerUser } from "./controllers/userControllers.js";

dotenv.config();
const port = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/user", registerUser);

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

app.listen(port, (req, res) => {
  console.log(`Server running on http://localhost:${port}`);
});
