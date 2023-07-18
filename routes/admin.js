const express = require("express");
const router = express.Router();

const admin = require("../middleware/admin");

const adminCtrl = require("../controllers/admin");

//********** route pour creer un compte admin et connexion admin **********
//********** seul les admins peuvent créer un autres compte admin **********

router.post("/signup", admin, adminCtrl.signup);
router.post("/login", adminCtrl.login);

router.get("/get-admins", admin, adminCtrl.getAllAdmin);

module.exports = router;
