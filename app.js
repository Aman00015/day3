import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from 'dotenv'
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express();
config({
    path:"./data/config.env"
})
//using middleware to avoid Cannot destructure property 'name' of 'req.body' as it is undefined.
app.use(express.json());
app.use(cookieParser())
// CORS ALLOWS REQUEST FOR SPECIFIC DOMAIN {TODO} 
app.use(cors({
  origin:[process.env.FORTEND_URL],
  methods:['GET','POST','PUT','DELETE'],
  // things like cookie frontend data nhi milega false set karne pe
  credentials:true,
}))

// const router = express.Router()
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);


app.get("/", (req, res) => {
  res.send("nice ");
});
app.use(errorMiddleware)