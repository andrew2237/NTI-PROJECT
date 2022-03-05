const router = require("express").Router();
const authAdmin = require("../middleware/authAdmin");
const adminController = require("../app/controller/admin.controller");
const uploade = require("../middleware/fileUpload");

router.post("/addbook/:catgory", authAdmin, adminController.addBook);
router.post("/addcat/:catgory", authAdmin, adminController.addCat);
router.post(
  "/profile/:bookId",
  authAdmin,
  uploade.single("img"),
  adminController.productImg
);
router.post("/editbook/:id", authAdmin, adminController.editbook);
router.post("/delAllbooks", authAdmin, adminController.delAllBook);
router.post("/delbook/:id", authAdmin, adminController.delBook);
router.post("/addAttrbiutes/:id", authAdmin, adminController.addAttrbiutes);
router.post("/delAttrbiute/:id", authAdmin, adminController.delAttrbiute);
router.post("/delAllAttrbiute/:id", authAdmin, adminController.delAllAttrbiute);
//router.post("/editAttrbiute/:id", authAdmin, adminController.editAttrbiute);
module.exports = router;
