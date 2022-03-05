const mongoose = require("mongoose");
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    catgory: {
      type: String,
      trim: true,
      enum: ["romance", "action", "horror", "short stories", "cookbooks"],
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
    },
    summary: {
      type: String,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    url: {
      type: String,
      trim: true,
    },
    bookId: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const book = mongoose.model("book", bookSchema);
module.exports = book;
