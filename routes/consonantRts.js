import { Router } from "express";
import * as controllers from "../controllers/consonantCtrl.js";

const router = Router();


router.get("/", controllers.getAllConsonants);
router.get("/:id", controllers.getOneConsonant);
router.post("/", controllers.createConsonant);
router.put("/:id", controllers.updateConsonant);
router.delete("/:id", controllers.deleteConsonant);


export default router;