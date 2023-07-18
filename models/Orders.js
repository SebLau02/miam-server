const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	_id: { type: String, required: true },
});

const ordersSchema = mongoose.Schema({
	clientName: { type: String, required: true },
	tableNumber: { type: Number, required: true },
	meals: { type: [mealSchema], default: [], required: true },
});

module.exports = mongoose.model("Orders", ordersSchema);

const servedOrdersSchema = mongoose.Schema({
	clientName: { type: String, required: true },
	tableNumber: { type: Number, required: true },
	meals: { type: [mealSchema], default: [], required: true },
});

module.exports = mongoose.model("ServedOrders", servedOrdersSchema);
