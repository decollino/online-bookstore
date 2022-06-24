import Author from "../models/author.model.js";

async function createAuthor(author) {
  try {
    return await Author.create(author);
  } catch (err) {
    throw err;
  }
}

async function updateAuthor(author) {
  try {
    await Author.update(author, {
      where: {
        autorId: author.autorId,
      },
    });
    return await getAuthor(author.autorId);
  } catch (err) {
    throw err;
  }
}

async function deleteAuthor(id) {
  try {
    return await Author.destroy({
      where: { autorId: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getAuthors() {
  try {
    let authors = await Author.findAll();
    const newAuthor = authors.map((author) => {
      return delete author.dataValues.senha;
    });
    return authors;
  } catch (err) {
    throw err;
  }
}

async function getAuthor(id) {
  try {
    let author = await Author.findByPk(id);
    delete author.dataValues.senha;
    return author;
  } catch (err) {
    throw err;
  }
}

export default {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthors,
  getAuthor,
};
