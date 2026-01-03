import express from "express";
import dotenv from "dotenv";
import mongoUsersRoute from "./routes/userRoute.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import userRoutes from "./routes/user.routes.js";

import { connectDB } from "./db/mongo.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.use("/ormapi", authMiddleware, userRoutes);
app.use("/odmapi", mongoUsersRoute);

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
