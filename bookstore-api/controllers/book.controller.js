import BookService from "../services/book.service.js";

async function createBook(req, res, next) {
  try {
    let book = req.body;
    //book.estoque !== null
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
    if (!book.livroId || !book.valor) {
      throw new Error("The book id and value are requerired!");
    }
    if (book.nome || book.autorId) {
      throw new Error("The book name and author cannot be changed!");
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
    logger.info(`GET /books`);
  } catch (err) {
    next(err);
  }
}

async function getBook(req, res, next) {
  try {
    res.send(await BookService.getBook(req.params.id));
    logger.info(`GET /books`);
  } catch (err) {
    next(err);
  }
}

async function createBookInfo(req, res, next) {
  try {
    let bookInfo = req.body;
    if (!bookInfo.livroId) {
      throw new Error("Book ID is requerired!");
    }
    await BookService.createBookInfo(bookInfo);
    res.end();
    logger.info(`POST /book/info - ${JSON.stringify(bookInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateBookInfo(req, res, next) {
  try {
    let bookInfo = req.body;
    if (!bookInfo.livroId) {
      throw new Error("Book ID is requerired!");
    }
    await BookService.updateBookInfo(bookInfo);
    res.end();
    logger.info(`PUT /book/info - ${JSON.stringify(bookInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteBookInfo(req, res, next) {
  try {
    res.send(await BookService.deleteBookInfo(parseInt(req.params.id)));
    logger.info("DELETE /book/info");
  } catch (err) {
    next(err);
  }
}

async function createReview(req, res, next) {
  try {
    let review = req.body;
    if (!req.params.bookId || !review) {
      throw new Error("Book ID e Review are requerired!");
    }
    await BookService.createReview(review, req.params.bookId);
    logger.info(`POST /book/review`);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function deleteReview(req, res, next) {
  try {
    await BookService.deleteReview(req.params.bookId, req.params.index);
    logger.info(`DELETE /book/${req.params.bookId}/review/${req.params.index}`);
    res.end();
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
  createBookInfo,
  updateBookInfo,
  deleteBookInfo,
  createReview,
  deleteReview,
};
