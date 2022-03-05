const router = require("express").Router();
const auth = require("../middleware/auth");
const userConroller = require("../app/controller/user.controller");
router.get("/showAllBooks/:catType", auth, userConroller.showAllBooks);
router.get("/showAllcats", auth, userConroller.showAllcats);
router.get("/showBook/:id", userConroller.showBook);
router.post("/buyBook/:id/:quantity", auth, userConroller.buyBook);
module.exports = router;
