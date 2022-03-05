const jwt = require("jsonwebtoken");
const userModel = require("../database/models/user.model");
const authAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("bearer ", "");
    const d_token = jwt.verify(token, process.env.JWTKEY);
    const admin = await userModel.findOne({
      _id: d_token,
      "tokens.token": token,
    });
    if (!admin) throw new Error("invalid admin");
    if (admin.userType != "admin") throw new Error("not admin");
    req.user = admin;
    req.token = token;

    next();
  } catch (e) {
    res.send({
      apiStatus: false,
      date: e.message,
      message: "not authorized",
    });
  }
};
module.exports = authAdmin;
