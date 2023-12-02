import db from "./db/connection.js";
import routes from "./routes/index.js";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", routes);

db.on("connected", () => {
  console.clear();
  app.listen(PORT, () => {
    console.log(`Express server is running in development on PORT ${PORT}`);
  });
});
