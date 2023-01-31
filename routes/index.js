import { Router } from "express";
import alphabetRts from './alphabetRts.js'
import phraseRts from './phraseRts.js'
import dotenv from 'dotenv'

dotenv.config()

const router = Router();
router.get("/", (req, res) => {
    res.send("This is the api root!");
  });
  
  router.use("/alphabet", alphabetRts);
  router.use("/phrases", phraseRts);


export default router;