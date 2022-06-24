import mongoose from "mongoose";

const AssessmentsSchema = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacao: String,
  },
  { collection: "clients" }
);

export default AssessmentsSchema;
