import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import Client from "../models/client.model.js";
import Sale from "../models/sale.model.js";

async function createSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (err) {
    throw err;
  }
}

async function updateSale(sale) {
  try {
    console.log(sale);
    await Sale.update(sale, {
      where: {
        vendaId: sale.vendaId,
      },
    });
    return await getSale(sale.vendaId);
  } catch (err) {
    throw err;
  }
}

async function deleteSale(id) {
  try {
    return await Sale.destroy({
      where: { vendaId: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getSales() {
  try {
    let sales = await Sale.findAll();
    const newSale = sales.map((sale) => {
      return delete sale.dataValues.senha;
    });
    return sales;
  } catch (err) {
    throw err;
  }
}

async function getSale(id) {
  try {
    let sale = await Sale.findByPk(id);
    delete sale.dataValues.senha;
    return sale;
  } catch (err) {
    throw err;
  }
}

async function getSaleByClientId(id) {
  try {
    return await Sale.findAll({
      where: {
        clienteId: id,
      },
      include: [
        {
          model: Client,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSaleByBookId(id) {
  try {
    return await Sale.findAll({
      where: {
        livroId: id,
      },
      include: [
        {
          model: Book,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSaleByAuthorId(bookIdByAuthor) {
  try {
    return await Sale.findAll({
      where: {
        livroId: bookIdByAuthor,
      },
      include: [
        {
          model: Book,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSale,
  getSaleByClientId,
  getSaleByBookId,
  getSaleByAuthorId,
};
