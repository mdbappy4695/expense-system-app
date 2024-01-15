const express = require("express");
const {
  addtransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionsCtrl");

const router = express.Router();

//route
//add transection || post
router.post("/add-transection", addtransection);

//edit transection || post
router.post("/edit-transection", editTransection);

//delete transection || post
router.post("/delete-transection", deleteTransection);

//post transection || post
router.post("/get-transection", getAllTransection);

module.exports = router;
