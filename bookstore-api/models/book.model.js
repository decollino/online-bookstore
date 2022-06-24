import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Author from "./author.model.js";

const Book = db.define(
  "livros",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Book.belongsTo(Author, { foreignKey: "autorId" });

export default Book;
