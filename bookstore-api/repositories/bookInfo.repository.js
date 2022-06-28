import BookInfoSchema from "../schemas/bookInfo.schema.js";
import { connect } from "./mongo.db.js";

async function createBookInfo(bookInfo) {
  try {
    const mongoose = await connect();
    const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
    bookInfo = new BookInfo(bookInfo);
    await bookInfo.save();
  } catch (err) {
    throw err;
  }
}

async function updateBookInfo(bookInfo) {
  try {
    const mongoose = await connect();
    const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
    await BookInfo.findOneAndUpdate({ livroId: bookInfo.livroId }, bookInfo);
  } catch (err) {
    throw err;
  }
}

async function deleteBookInfo(bookId) {
  try {
    const mongoose = await connect();
    const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
    await BookInfo.deleteOne({ livroId: bookId });
  } catch (err) {
    throw err;
  }
}

async function getBookInfo(bookId) {
  try {
    const mongoose = await connect();
    const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
    const query = BookInfo.findOne({ livroId: bookId });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function createReview(review, bookId) {
  try {
    const bookInfo = await getBookInfo(bookId);
    bookInfo.avaliacoes.push(review);
    await updateBookInfo(bookInfo);
  } catch (err) {
    throw err;
  }
}

async function deleteReview(bookId, index) {
  try {
    const bookInfo = await getBookInfo(bookId);
    bookInfo.avaliacoes.splice(index, 1);
    await updateBookInfo(bookInfo);
  } catch (err) {
    throw err;
  }
}

async function getProductsInfo() {
  try {
    const mongoose = await connect();
    const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
    const query = BookInfo.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createBookInfo,
  updateBookInfo,
  getBookInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteBookInfo,
};
