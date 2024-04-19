import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("mongodb Database Connect connected")
})

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);




app.listen(8300, () => {
  console.log("app is runnning on port " + 8400)
})

