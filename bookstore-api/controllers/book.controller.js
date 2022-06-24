import BookService from "../services/book.service.js";

async function createBook(req, res, next) {
  try {
    let book = req.body;
    if (!book.nome || !book.valor || !book.estoque || !book.autorId) {
      throw new Error("The name, value, stock and author id are requerired!");
    }

    await BookService.createBook(book);
    res.end();
    logger.info(`POST /book/info - ${JSON.stringify(book)}`);
  } catch (err) {
    next(err);
  }
}

async function updateBook(req, res, next) {
  try {
    let book = req.body;
    if (
      !book.livroId ||
      !book.nome ||
      !book.valor ||
      !book.estoque ||
      !book.autorId
    ) {
      throw new Error(
        "The book id, name, value, stock and author id are requerired!"
      );
    }
    book = await BookService.updateBook(book);
    res.send(book);
    logger.info(`PUT /book - ${JSON.stringify(book)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteBook(req, res, next) {
  try {
    await BookService.deleteBook(req.params.id);
    res.end();
    logger.info(`DELETE /book - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getBooks(req, res, next) {
  try {
    res.send(await BookService.getBooks(req.query.authorId));
    logger.info(`GET /books - ${JSON.stringify(book)}`);
  } catch (err) {
    next(err);
  }
}

async function getBook(req, res, next) {
  try {
    res.send(await BookService.getBook(req.params.id));
    logger.info(`GET /books - ${JSON.stringify(book)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
};
