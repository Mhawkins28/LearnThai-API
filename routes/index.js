import { Router } from "express";
import consonantRts from "./consonantRts.js";
import phraseRts from "./phraseRts.js";
import numberRts from "./numberRts.js";
import userRts from "./userRts.js";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
router.get("/", (req, res) => {
  res.render("rootAPI");
});

router.use("/consonants", consonantRts);
router.use("/phrases", phraseRts);
router.use("/numbers", numberRts);
router.use("/", userRts);

export default router;
