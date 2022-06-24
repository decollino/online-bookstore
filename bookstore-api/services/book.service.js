import BookRepository from "../repositories/book.repository.js";
import saleRepository from "../repositories/sale.repository.js";

async function createBook(book) {
  await BookRepository.createBook(book);
}

async function updateBook(book) {
  return await BookRepository.updateBook(book);
}

async function deleteBook(id) {
  const sales = await saleRepository.getSaleByBookId(id);
  if (sales.length !== 0) {
    throw new Error(
      "Forbidden deletion! There are sales registered for this book!"
    );
  } else {
    return await BookRepository.deleteBook(id);
  }
}

async function getBooks(authorId) {
  if (authorId) {
    return await BookRepository.getBookByAuthorId(authorId);
  }
  return await BookRepository.getBooks();
}

async function getBook(id) {
  return await BookRepository.getBook(id);
}

export default {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
};
