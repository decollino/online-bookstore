import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://igti-bookstore:7rTQO8FkxCUIRZpA@cluster0.74lus.mongodb.net/test";
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
