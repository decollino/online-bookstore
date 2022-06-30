import express from "express";
import BookController from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", BookController.createBook);
router.post("/info", BookController.createBookInfo);
router.post("/:bookId/review", BookController.createReview);
router.put("/", BookController.updateBook);
router.put("/info", BookController.updateBookInfo);
router.delete("/:id", BookController.deleteBook);
router.delete("/info/:id", BookController.deleteBookInfo);
router.delete("/:bookId/review/:index", BookController.deleteReview);
router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBook);

export default router;
