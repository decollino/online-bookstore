import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Client from "./client.model.js";
import Book from "./book.model.js";

const Sale = db.define(
  "vendas",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Sale.belongsTo(Client, { foreignKey: "clienteId" });
Sale.belongsTo(Book, { foreignKey: "livroId" });

export default Sale;
