import mongoose from "mongoose";
import AssessmentsSchema from "./assessments.schema.js";

const ClientSchema = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [AssessmentsSchema],
  },
  { collection: "clients" }
);

export default ClientSchema;
