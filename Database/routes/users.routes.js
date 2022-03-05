const router = require("express").Router();
const auth = require("../middleware/auth");
const authController = require("../app/controller/auth.controller");
router.post("/register/:userType", authController.register);
router.post("/login/:userType", authController.login);
router.get("/me", auth, authController.me);
router.get("/showAll", auth, authController.showAll);
router.get("/showUser/:id", auth, authController.showUser);
router.get("/delUser/:id", auth, authController.delUser);
router.get("/delAll", auth, authController.delAll);
router.post("/logout", auth, authController.logout);
router.post("/logoutAll", auth, authController.logoutAll);

module.exports = router;
