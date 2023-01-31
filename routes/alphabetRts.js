import { Router } from "express";
import * as controllers from "../controllers/alphabetCtrl.js";

const router = Router();


router.get("/", controllers.getAllAlphabet);
router.get("/:id", controllers.getOneAlphabet);
router.post("/", controllers.createAlphabet);
router.put("/:id", controllers.updateAlphabet);
router.delete("/:id", controllers.deleteAlphabet);


export default router;