import express from "express";
import userRouter from "./routes/user.js";
import {config} from 'dotenv'
 
export const app = express();
config({
    path:"./data/config.env"
})
// const router = express.Router()
app.use("/users", userRouter);

//using middleware to avoid Cannot destructure property 'name' of 'req.body' as it is undefined.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("nice ");
});
