const express = require("express");
const router = express.Router();
require("dotenv").config();

//********** import des controllers et middleware **********
const mealCtrl = require("../controllers/meal");

const admin = require("../middleware/admin");

//********** routes **********

router.get(`${process.env.MEALS_ROUTE_GET_ALL}`, mealCtrl.getAllMeal);
router.get(`${process.env.MEALS_ROUTE_GET_ONE}`, mealCtrl.getOneMeal);
router.get(`${process.env.MEALS_ROUTE_GET_FAM}`, mealCtrl.getMealFam);

router.post(`${process.env.MEALS_ROUTE_CREATE}`, admin, mealCtrl.createMeal);
router.put(`${process.env.MEALS_ROUTE_MODIFY}`, admin, mealCtrl.modifyMeal);

router.delete(
	`${process.env.MEALS_ROUTE_DELETE_ONE}`,
	admin,
	mealCtrl.deleteOneMeal,
);
router.delete(
	`${process.env.MEALS_ROUTE_DELETE_ALL}`,
	admin,
	mealCtrl.deleteAllMeal,
);

module.exports = router;
