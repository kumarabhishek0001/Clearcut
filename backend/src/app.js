console.log("APP.JS LOADED");


import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/userRoutes.js";

const app = express();

const cors_config = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(cors_config));
app.use(morgan("dev"));

// Preserve the raw body for Clerk webhook signature verification
app.use(
  "/api/user/webhooks",
  express.raw({ type: "application/json" })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>App is live</h1>");
});

app.use("/api/user", userRouter);

export default app;