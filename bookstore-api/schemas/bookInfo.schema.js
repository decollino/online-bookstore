import mongoose from "mongoose";
import ReviewSchema from "./review.schema.js";

const BookInfoSchema = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [ReviewSchema],
  },
  { collection: "bookInfo" }
);

export default BookInfoSchema;
