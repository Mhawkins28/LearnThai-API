import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .set("strictQuery", true)
  .connect(process.env.DB_URL || "mongodb://localhost:27017/thai")
  .then((instance) => {
    console.log(`Connected on ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Got an error see details, ${err}`));

export default mongoose.connection;
