import BookRepository from "../repositories/book.repository.js";
import SaleRepository from "../repositories/sale.repository.js";
import BookInfoRepository from "../repositories/bookInfo.repository.js";

async function createBook(book) {
  await BookRepository.createBook(book);
}

async function updateBook(book) {
  return await BookRepository.updateBook(book);
}

async function deleteBook(id) {
  const sales = await SaleRepository.getSaleByBookId(id);
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
  const book = await BookRepository.getBook(id);
  book.info = await BookInfoRepository.getBookInfo(parseInt(id));
  const bookComplete = book.dataValues;
  bookComplete.info = book.info;
  // console.log("bookComplete: ", bookComplete);
  return bookComplete;
}

async function createBookInfo(bookInfo) {
  await BookInfoRepository.createBookInfo(bookInfo);
}

async function updateBookInfo(bookInfo) {
  await BookInfoRepository.updateBookInfo(bookInfo);
}

async function deleteBookInfo(bookId) {
  await BookInfoRepository.deleteBookInfo(bookId);
}

async function createReview(review, bookId) {
  await BookInfoRepository.createReview(review, bookId);
}

async function deleteReview(bookId, index) {
  await BookInfoRepository.deleteReview(parseInt(bookId), index);
}

export default {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
  createBookInfo,
  updateBookInfo,
  deleteBookInfo,
  createReview,
  deleteReview,
};
