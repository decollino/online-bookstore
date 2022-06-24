import Book from "../models/book.model.js";

async function createBook(book) {
  try {
    return await Book.create(book);
  } catch (err) {
    throw err;
  }
}

async function updateBook(book) {
  try {
    await Book.update(book, {
      where: {
        livroId: book.livroId,
      },
    });
    return await getBook(book.livroId);
  } catch (err) {
    throw err;
  }
}

async function deleteBook(id) {
  try {
    return await Book.destroy({
      where: { livroId: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getBooks() {
  try {
    let books = await Book.findAll();
    const newBook = books.map((book) => {
      return delete book.dataValues.senha;
    });
    return books;
  } catch (err) {
    throw err;
  }
}

async function getBook(id) {
  try {
    let book = await Book.findByPk(id);
    delete book.dataValues.senha;
    return book;
  } catch (err) {
    throw err;
  }
}

export default {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
};
