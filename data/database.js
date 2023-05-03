import mongoose from "mongoose";

//connecting mongodb database
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "nodeapi",
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
