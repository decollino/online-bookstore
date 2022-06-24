import AuthorService from "../services/author.service.js";
import validator from "email-validator";

async function createAuthor(req, res, next) {
  try {
    let author = req.body;
    if (!author.nome || !author.email || !author.telefone) {
      throw new Error("The name, email and phone are requerired!");
    }

    if (!validator.validate(author.email)) {
      throw new Error("The email is invalid!");
    }

    await AuthorService.createAuthor(author);
    res.end();
    logger.info(`POST /author/info - ${JSON.stringify(author)}`);
  } catch (err) {
    next(err);
  }
}

async function updateAuthor(req, res, next) {
  try {
    let author = req.body;
    if (!author.autorId || !author.nome || !author.email || !author.telefone) {
      throw new Error("The id, name, email and phone are requerired!");
    }
    author = await AuthorService.updateAuthor(author);
    res.send(author);
    logger.info(`PUT /author - ${JSON.stringify(author)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAuthor(req, res, next) {
  try {
    await AuthorService.deleteAuthor(req.params.id);
    res.end();
    logger.info(`DELETE /author - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getAuthors(req, res, next) {
  try {
    res.send(await AuthorService.getAuthors());
    logger.info(`GET /authors - ${JSON.stringify(author)}`);
  } catch (err) {
    next(err);
  }
}

async function getAuthor(req, res, next) {
  try {
    res.send(await AuthorService.getAuthor(req.params.id));
    logger.info(`GET /authors - ${JSON.stringify(author)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthors,
  getAuthor,
};
