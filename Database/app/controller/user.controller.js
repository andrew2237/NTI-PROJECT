const req = require("express/lib/request");
const bookModel = require("../../database/models/books.model");
const catModel = require("../../database/models/category.model");
class User {
  static showAllBooks = async (req, res) => {
    try {
      const book = await bookModel.find({ catgory: req.params.catType });
      res
        .status(200)
        .send({ apiStatues: true, data: book, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot fetch data",
      });
    }
  };
  static showAllcats = async (req, res) => {
    try {
      const cats = await catModel.find();
      res
        .status(200)
        .send({ apiStatues: true, data: cats, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot fetch data",
      });
    }
  };
  static showBook = async (req, res) => {
    try {
      const oneBook = await bookModel.findById(req.params.id);
      res
        .status(200)
        .send({ apiStatues: true, data: oneBook, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot fetch data",
      });
    }
  };
  static buyBook = async (req, res) => {
    try {
      const book = await bookModel.findOneAndUpdate(
        req.params.id,
        req.params.quantity
      );
      if (book.quantity > 0) {
          book.quantity = book.quantity - req.params.quantity;
        await book.save();
      }else{
        book.quantity=0;
      }     
      res
        .status(200)
        .send({ apiStatues: true, data: book, message: "opertaion succeeded" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "opertaion didont success",
      });
    }
  };
}
module.exports = User;
