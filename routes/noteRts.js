import { Router } from "express";
import * as controllers from "../controllers/noteCtrl.js";

const router = Router();


router.get("/", controllers.getAllNotes);
router.get("/favorites", controllers.filterFav);
router.get("/:id", controllers.getOneNote);
router.post("/", controllers.createNote);
router.put("/:id", controllers.updateNote);
router.delete("/:id", controllers.deleteNote);


export default router;