import AuthorRepository from "../repositories/author.repository.js";

async function createAuthor(author) {
  await AuthorRepository.createAuthor(author);
}

async function updateAuthor(author) {
  return await AuthorRepository.updateAuthor(author);
}

async function deleteAuthor(id) {
  // const animal = await AnimalRepository.getAnimalByAuthorId(id);
  // if (animal) {
  //   throw new Error(
  //     "Forbidden deletion! There are animals registered for this author!"
  //   );
  // } else {
  //   return await AuthorRepository.deleteAuthor(id);
  // }
  return await AuthorRepository.deleteAuthor(id);
}

async function getAuthors() {
  return await AuthorRepository.getAuthors();
}

async function getAuthor(id) {
  return await AuthorRepository.getAuthor(id);
}

export default {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthors,
  getAuthor,
};
