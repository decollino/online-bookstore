import BookRepository from "../repositories/book.repository.js";

async function createBook(book) {
  await BookRepository.createBook(book);
}

async function updateBook(book) {
  return await BookRepository.updateBook(book);
}

async function deleteBook(id) {
  // const animal = await AnimalRepository.getAnimalByBookId(id);
  // if (animal) {
  //   throw new Error(
  //     "Forbidden deletion! There are animals registered for this book!"
  //   );
  // } else {
  //   return await BookRepository.deleteBook(id);
  // }
  return await BookRepository.deleteBook(id);
}

async function getBooks() {
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
