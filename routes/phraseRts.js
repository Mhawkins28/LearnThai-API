import { Router } from "express";
import * as controllers from "../controllers/phrasesCtrl.js";

const router = Router();


router.get("/", controllers.getAllPhrases);
router.get("/:id", controllers.getOnePhrase);
router.post("/", controllers.createPhrase);
router.put("/:id", controllers.updatePhrase);
router.delete("/:id", controllers.deletePhrase);
router.get("/category/:category", controllers.filterCategory);


export default router;