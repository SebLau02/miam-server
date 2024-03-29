const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//********** import des routes **********

const mealRoute = require("./routes/meal");
const orderRoute = require("./routes/order");
const adminRoute = require("./routes/admin");

mongoose
	.connect(`${process.env.MONGO_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS",
	);
	next();
});

//********** routes **********

app.use(`${process.env.MEAL_ROUTE}`, mealRoute);
app.use(`${process.env.ORDER_ROUTE}`, orderRoute);
app.use(`${process.env.ADMIN_ROUTE}`, adminRoute);

module.exports = app;
