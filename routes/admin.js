const express = require("express");
const router = express.Router();
require("dotenv").config();

const admin = require("../middleware/admin");

const adminCtrl = require("../controllers/admin");

//********** route pour creer un compte admin et connexion admin **********
//********** seul les admins peuvent créer un autres compte admin **********

router.post(`${process.env.SIGNUP_ROUTE}`, admin, adminCtrl.signup);
router.post(`${process.env.LOGIN_ROUTE}`, adminCtrl.login);

router.get(`${process.env.GET_ADMINS_ROUTE}`, admin, adminCtrl.getAllAdmin);

module.exports = router;
