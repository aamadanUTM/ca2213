import express from "express";
import dotenv from "dotenv";
import { authMiddleware } from "./middlewares/auth.middleware.js";
dotenv.config();
const app = express();

import userRoutes from "./routes/user.routes.js";

const PORT = process.env.APP_PORT;

app.use(express.json());

app.use("/api", authMiddleware, userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
