const bookModel = require("../../database/models/books.model");
const catModel = require("../../database/models/category.model");
class Admin {
  static addBook = async (req, res) => {
    try {
      const book = new bookModel({
        ...req.body,
        bookId: req.user._id,
        catgory: req.params.catgory,
      });
      await book.save();
      res
        .status(200)
        .send({ apiStatues: true, data: book, message: "book added" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot add book",
      });
    }
  };
  static addCat = async (req, res) => {
    try {
      const cat = new catModel({ catgory: req.params.catgory });
      await cat.save();
      res
        .status(200)
        .send({ apiStatues: true, data: cat, message: "category added" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot add category",
      });
    }
  };

  static delBook = async (req, res) => {
    try {
      await bookModel.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .send({ apiStatues: true, data: book, message: "book deleted" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot delete book",
      });
    }
  };
  static delAllBook = async (req, res) => {
    try {
      await bookModel.deleteMany();
      res
        .status(200)
        .send({ apiStatues: true, data: [], message: "books deleted" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot delete books",
      });
    }
  };
  static editbook = async (req, res) => {
    try {
      const book = await bookModel.findOneAndUpdate(req.params.id, req.body);
      await book.save();
      res
        .status(200)
        .send({ apiStatues: true, data: book, message: "book updated" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot update book",
      });
    }
  };
  static addAttrbiutes = async (req, res) => {
    try {
      const book = await bookModel.findById(req.params.id);
      book.attributes.push(req.body);
      await book.save();
      res.status(200).send({
        apiStatus: true,
        data: book,
        message: "attributes uploaded",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "cannot uploade attributes",
      });
    }
  };
  /*  static editAttrbiute = async (req, res) => {
    try {
      const attb = req.params.id;
      const index = { "attributes._id": req._id };
      const book = await bookModel.findById(attb);
      const myAttr = book.attributes.findIndex((a) => a._id == index);
      console.log(myAttr);
      book.attributes[myAttr] = req.body;
      await book.save();
      res.send({
        apiStatus: true,
        data: book,
        message: "attributes uploaded",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "cannot uploade attributes",
      });
    }
  }; */
  static delAttrbiute = async (req, res) => {
    try {
      const attb = req.params.id;
      const book = await bookModel.findOne({ "attributes._id": attb });
      book.attributes = book.attributes.filter((a) => a._id != attb);
      await book.save();
      res.status(200).send({
        apiStatus: true,
        data: book,
        message: "attributes deleted",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "cannot delete attribute",
      });
    }
  };
  static delAllAttrbiute = async (req, res) => {
    try {
      const book = await bookModel.findById(req.params.id);
      console.log(book);
      book.attributes = book.attributes.forEach((a) => {
        book.attributes.splice(a, 1);
      });
      await book.save();
      res.status(200).send({
        apiStatus: true,
        data: book,
        message: "attributes deleted",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "cannot delete attribute",
      });
    }
  };
  static productImg = async (req, res) => {
    try {
      const book = await bookModel.findById(req.params.bookId);
      book.image = req.file.path;
      await book.save();
      res.status(200).send({
        apiStatus: true,
        data: book,
        message: "image uploaded",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "cannot uploade image",
      });
    }
  };
}
module.exports = Admin;
