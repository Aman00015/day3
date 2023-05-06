import { app } from "./app.js";
import { connectDB } from "./data/database.js";
connectDB();
app.listen(5000, () => {
  console.log(`server working at port :${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
