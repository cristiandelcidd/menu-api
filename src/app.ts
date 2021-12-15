import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

import menuRoutes from "./routes";

config();
const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(menuRoutes);

(async () => {
  const uri: string = `${process.env.MONGO_URL}`;
  try {
    await mongoose.connect(uri);
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    throw error;
  }
})();
