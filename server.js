import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

// middleWare
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
