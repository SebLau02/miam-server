const mongoose = require("mongoose");

const dishesSchema = mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	famille: { type: String, required: true },
});

module.exports = mongoose.model("Dishes", dishesSchema);

const startersSchema = mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	famille: { type: String, required: true },
});

module.exports = mongoose.model("Starters", startersSchema);

const drinksSchema = mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	famille: { type: String, required: true },
});

module.exports = mongoose.model("Drinks", drinksSchema);

const aftersSchema = mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	famille: { type: String, required: true },
});

module.exports = mongoose.model("Afters", aftersSchema);

const mealSchema = mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	famille: { type: String, required: true },
});

module.exports = mongoose.model("Meal", mealSchema);
