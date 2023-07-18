const express = require("express");
const router = express.Router();

//********** import des controllers et middleware **********
const orderCtrl = require("../controllers/order");

const admin = require("../middleware/admin");

//********** routes **********

//********** crééer une commande et envoyer a l'admin **********

router.post("/", orderCtrl.mealOrder);

//********** valider une commande servi , admin**********

router.post("/served-order", orderCtrl.servedOrder);

//********** récupérer les commandes non servis , admin**********

router.get("/get-orders", orderCtrl.getAllOrders);

//********** récupérer une commande non servis en détail **********

router.get("/get-one-order/:orderId", admin, orderCtrl.getOneOrder);

//********** récupérer toutes les commande servis , admin**********

router.get("/get-served-orders", orderCtrl.getAllServedOrder);

//********** récupérer une commande servis **********

router.get("/get-served-orders/:orderId", admin, orderCtrl.getOneServedOrder);

//********** supprimer une commande servis , admin**********

router.delete("/delete-order/:orderId", orderCtrl.deleteOrder);
router.delete("/delete-served-order", orderCtrl.deleteServedOrder);

module.exports = router;
