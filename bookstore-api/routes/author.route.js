import express from "express";
import AuthorController from "../controllers/author.controller.js";

const router = express.Router();

router.post("/", AuthorController.createAuthor);
router.put("/", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);
router.get("/", AuthorController.getAuthors);
router.get("/:id", AuthorController.getAuthor);

export default router;
