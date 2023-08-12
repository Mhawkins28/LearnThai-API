import { Router } from "express";
import consonantRts from './consonantRts.js'
import phraseRts from './phraseRts.js'
import numberRts from './numberRts.js'
import noteRts from './noteRts.js'
import userRts from './userRts.js'
import dotenv from 'dotenv'

dotenv.config()

const router = Router();
router.get("/", (req, res) => {
    res.send("This is the api root!");
  });
  
  router.use("/consonants", consonantRts);
  router.use("/phrases", phraseRts);
  router.use("/numbers", numberRts)
  router.use("/notes", noteRts)
  router.use("/", userRts )


export default router;