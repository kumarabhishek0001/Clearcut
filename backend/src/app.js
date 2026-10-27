import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from 'morgan'
import userRouter from "./routes/userRoutes.js";

// App Configurations
const app = express();
const cors_config = {
  origin: "http://localhost:5173",
  Credential: true,
};

// Initialzing Middleware
app.use(express.json());
app.use(cors(cors_config));
app.use(morgan('dev'))


// API Routes
app.get("/", (req, res) => {
  res.send("<h1>App is live</h1>");
});

app.use('/api/user', userRouter)

export default app ;
