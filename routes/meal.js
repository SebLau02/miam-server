const express = require("express");
const router = express.Router();

//********** import des controllers et middleware **********
const mealCtrl = require("../controllers/meal");

const admin = require("../middleware/admin");

//********** routes **********

router.get("/meals", mealCtrl.getAllMeal);
router.get("/meals/:mealId", mealCtrl.getOneMeal);
router.get("/meals", mealCtrl.getMealFam);

router.post("/create-meal/mealFamily", admin, mealCtrl.createMeal);
router.put("/modify-meal/:mealId", admin, mealCtrl.modifyMeal);

router.delete("/delete-meal/:mealId", admin, mealCtrl.deleteOneMeal);
router.delete("/delete-all-meal", admin, mealCtrl.deleteAllMeal);

module.exports = router;
