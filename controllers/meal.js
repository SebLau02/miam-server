const Dishes = require("../models/Meal").model("Dishes");
const Starters = require("../models/Meal").model("Starters");
const Drinks = require("../models/Meal").model("Drinks");
const Afters = require("../models/Meal").model("Afters");
// const Meal = require("../models/Meal");

//********** récupérer les plats **********

exports.getAllMeal = (req, res, next) => {
	Promise.all([Dishes.find(), Starters.find(), Drinks.find(), Afters.find()])
		.then((meals) => {
			res.status(200).json({ message: "Plats trouvés", meals });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.getOneMeal = (req, res, next) => {
	const { mealId } = req.params;

	Promise.all([
		Dishes.findOne({ _id: mealId }),
		Starters.findOne({ _id: mealId }),
		Drinks.findOne({ _id: mealId }),
		Afters.findOne({ _id: mealId }),
	])
		.then((meals) => {
			res.status(200).json({ message: "Plat trouvé", meals });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.getMealFam = (req, res, next) => {
	const { mf } = req.params;

	Promise.all([
		Dishes.findOne({ famille: mf }),
		Starters.findOne({ famille: mf }),
		Drinks.findOne({ famille: mf }),
		Afters.findOne({ famille: mf }),
	])
		.then((famille) => {
			res.status(200).json({ message: "Famille trouvé", famille });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** créer un plat **********

exports.createMeal = (req, res, next) => {
	const mealFamily = req.query.mf;

	if (mealFamily === "starters") {
		delete req.body._id;

		const starters = new Starters({ ...req.body });

		starters
			.save()
			.then(() => {
				res.status(201).json({
					message: "Nouvelle entrée ajouté",
					starters,
				});
			})
			.catch((error) => {
				res.status(400).json({ error });
			});
	}

	if (mealFamily === "dishes") {
		delete req.body._id;

		const dishes = new Dishes({ ...req.body });

		dishes
			.save()
			.then(() => {
				res.status(201).json({
					message: "Nouveau plat ajouté",
					dishes,
				});
			})
			.catch((error) => {
				res.status(400).json({ error });
			});
	}

	if (mealFamily === "drinks") {
		delete req.body._id;

		const drinks = new Drinks({ ...req.body });

		drinks
			.save()
			.then(() => {
				res.status(201).json({
					message: "Nouvelle boisson ajouté",
					drinks,
				});
			})
			.catch((error) => {
				res.status(400).json({ error });
			});
	}

	if (mealFamily === "afters") {
		delete req.body._id;

		const afters = new Afters({ ...req.body });

		afters
			.save()
			.then(() => {
				res.status(201).json({
					message: "Nouveau dessert ajouté",
					afters,
				});
			})
			.catch((error) => {
				res.status(400).json({ error });
			});
	}
};

//********** supprimer un plat **********

exports.deleteOneMeal = (req, res, next) => {
	const { mealId } = req.params;

	Promise.all([
		Dishes.deleteOne({ _id: mealId }),
		Starters.deleteOne({ _id: mealId }),
		Drinks.deleteOne({ _id: mealId }),
		Afters.deleteOne({ _id: mealId }),
	])
		.then(() => {
			res.status(200).json({ message: "Plat supprimé" });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

exports.deleteAllMeal = (req, res, next) => {
	Promise.all([
		Dishes.deleteMany(),
		Starters.deleteMany(),
		Drinks.deleteMany(),
		Afters.deleteMany(),
	])
		.then(() => {
			res.status(200).json({ message: "Plat supprimé" });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};

//********** modifier un plat **********

exports.modifyMeal = (req, res, next) => {
	const { mealId } = req.params;
	const { name, image, description, price, famille } = req.body;

	Promise.all([
		Dishes.findOneAndUpdate(
			{ _id: mealId },
			{ name, image, description, price, famille },
		),
		Starters.findOneAndUpdate(
			{ _id: mealId },
			{ name, image, description, price, famille },
		),
		Drinks.findOneAndUpdate(
			{ _id: mealId },
			{ name, image, description, price, famille },
		),
		Afters.findOneAndUpdate(
			{ _id: mealId },
			{ name, image, description, price, famille },
		),
	])
		.then((meal) => {
			res.status(200).json({ message: "Plat modifié", meal });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};
