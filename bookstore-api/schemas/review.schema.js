import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacao: String,
  },
  { collection: "bookInfo" }
);

export default ReviewSchema;
