import BookRepository from "../repositories/book.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

async function createSale(sale) {
  const book = await BookRepository.getBook(sale.livroId);
  if (book.dataValues.estoque > 0) {
    sale = { ...sale, valor: book.dataValues.valor };
    await SaleRepository.createSale(sale);
    book.dataValues.estoque = book.dataValues.estoque - 1;
    await BookRepository.updateBook(book.dataValues);
  } else {
    throw new Error("The book's stock is insufficient to create the sale!");
  }
}

async function updateSale(sale) {
  return await SaleRepository.updateSale(sale);
}

async function deleteSale(id) {
  // const animal = await AnimalRepository.getAnimalBySaleId(id);
  // if (animal) {
  //   throw new Error(
  //     "Forbidden deletion! There are animals registered for this sale!"
  //   );
  // } else {
  //   return await SaleRepository.deleteSale(id);
  // }
  return await SaleRepository.deleteSale(id);
}

async function getSales(clientId, bookId) {
  if (clientId) {
    return await SaleRepository.getSaleByClientId(clientId);
  }
  if (bookId) {
    return await SaleRepository.getSaleByBookId(bookId);
  }
  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

export default {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSale,
};
