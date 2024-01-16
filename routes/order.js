const express = require("express");
const router = express.Router();
require("dotenv").config();

//********** import des controllers et middleware **********
const orderCtrl = require("../controllers/order");

const admin = require("../middleware/admin");

//********** routes **********

//********** crééer une commande et envoyer à l'admin **********

router.post("/", orderCtrl.mealOrder);

//********** valider une commande servi , admin**********

router.post(`${process.env.SERVED_ORDER_ROUTE}`, orderCtrl.servedOrder);

//********** récupérer les commandes non servis , admin**********

router.get(`${process.env.GET_ORDERS_ROUTE}`, orderCtrl.getAllOrders);

//********** récupérer une commande non servis en détail **********

router.get(`${process.env.GET_ONE_ORDER_ROUTE}`, admin, orderCtrl.getOneOrder);

//********** récupérer toutes les commande servis , admin**********

router.get(
	`${process.env.GET_SERVED_ORDERS_ROUTE}`,
	orderCtrl.getAllServedOrder,
);

//********** récupérer une commande servis **********

router.get(
	`${process.env.GET_ONE_SERVED_ORDER_ROUTE}`,
	admin,
	orderCtrl.getOneServedOrder,
);

//********** supprimer une commande servis , admin**********

router.delete(`${process.env.DELETE_ORDER_ROUTE}`, orderCtrl.deleteOrder);
router.delete(
	`${process.env.DELETE_SERVED_ORDER_ROUTE}`,
	orderCtrl.deleteServedOrder,
);

module.exports = router;
