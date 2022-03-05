const userModel = require("../../database/models/user.model");
const sendEmail = require("../helper/email");
const otpGenrator = require("../helper/otpGen");
class Auth {
  static register = async (req, res) => {
    try {
      const user = new userModel({
        ...req.body,
        userType: req.params.userType,
      });
      await user.save();
      sendEmail(
        user.email,
        "Welcome we hope to enjoy our App",
        "E-commerce App",
        "register"
      );
      const otp = otpGenrator(6);
      res.status(200).send({
        apiStatues: true,
        data: { user, otp },
        message: "data added",
      });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot add data",
      });
    }
  };
  static login = async (req, res) => {
    try {
      const user = await userModel.login(req.body.email, req.body.password, {
        userType: req.params.userType,
      });
      const token = await user.generateToken();
      res.status(200).send({
        apiStatues: true,
        data: { token, user },
        message: "user loggedin",
      });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "cannot login ",
      });
    }
  };
  static me = async (req, res) => {
    res
      .status(200)
      .send({ apiStatus: true, data: req.user, message: "data featched" });
  };
  static logout = async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((t) => t.token != req.token);
      await req.user.save();
      res
        .status(200)
        .send({ apiStatus: true, data: {}, message: "logged out" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in logout",
      });
    }
  };
  static logoutAll = async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res
        .status(200)
        .send({ apiStatus: true, data: {}, message: "logged out" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in logout",
      });
    }
  };
  static showAll = async (req, res) => {
    try {
      const users = await userModel.find();
      res
        .status(200)
        .send({ apiStatues: true, data: users, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot fetch data",
      });
    }
  };
  static showUser = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res
        .status(200)
        .send({ apiStatues: true, data: user, message: "data fetched" });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "didnot fetch data",
      });
    }
  };
  static delAll = async (req, res) => {
    try {
      const users = await userModel.deleteMany();
      res.status(200).send({
        apiStatues: true,
        data: users,
        message: "data deleted successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: " data didnot delete successfully",
      });
    }
  };
  static delUser = async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
        apiStatues: true,
        data: [],
        message: "data deleted successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatues: false,
        data: e.message,
        message: "data didnot delete successfully ",
      });
    }
  };
}
module.exports = Auth;
