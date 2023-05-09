import { Router } from "express";
import * as controllers from "../controllers/numberCtrl.js";

const router = Router();


router.get("/", controllers.getAllNumbers);
router.get("/:id", controllers.getOneNumber);
router.post("/", controllers.createNumber);
router.put("/:id", controllers.updateNumber);
router.delete("/:id", controllers.deleteNumber);


export default router;