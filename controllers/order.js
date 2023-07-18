const Orders = require("../models/Orders").model("Orders");
const ServedOrders = require("../models/Orders").model("ServedOrders");

//********** envoyer une commande / pour le coté client **********

exports.mealOrder = (req, res, next) => {
	delete req.body._id;

	const order = new Orders({ ...req.body });

	order
		.save()
		.then(() => {
			res.status(201).json({ message: "Commande envoyé", order });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** récupérer toute les commandes et 1 commande / coté admin **********

exports.getAllOrders = (req, res, next) => {
	Orders.find()
		.then((orders) => {
			res.status(200).json({ message: "Commandes trouvés", orders });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.getOneOrder = (req, res, next) => {
	const { orderId } = req.params;

	Orders.findOne({ _id: orderId })
		.then((order) => {
			res.status(200).json({ message: "Commandes trouvés", order });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** supprimer une commande **********

exports.deleteOrder = (req, res, next) => {
	const { orderId } = req.params;

	Orders.deleteOne({ _id: orderId })
		.then(() => {
			res.status(200).json({ message: "Commande supprimé" });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.deleteServedOrder = (req, res, next) => {
	const { orderId } = req.params;

	ServedOrders.deleteMany()
		.then(() => {
			res.status(200).json({ message: "Commande supprimé" });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** served order **********

//********** ajouter une commande servi  **********

exports.servedOrder = (req, res, next) => {
	delete req.body._id;

	const servedOrder = new ServedOrders({ ...req.body });

	servedOrder
		.save()
		.then(() => {
			res.status(201).json({ message: "Commande servie", servedOrder });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** récupérer toutes les & une commandes servie  **********

exports.getAllServedOrder = (req, res, next) => {
	ServedOrders.find()
		.then((servedOrder) => {
			res.status(200).json({
				message: "Commandes trouvées",
				servedOrder,
			});
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.getOneServedOrder = (req, res, next) => {
	const { orderId } = req.params;

	ServedOrders.findOne({ _id: orderId })
		.then((servedOrder) => {
			res.status(200).json({ message: "Commande trouvée", servedOrder });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};
