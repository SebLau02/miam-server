const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const secretToken = require("../utils/secretToken");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const admin = new Admin({
				email: req.body.email,
				nom: req.body.nom,
				prenom: req.body.prenom,
				password: hash,
			});
			admin
				.save()
				.then((admin) =>
					res
						.status(201)
						.json({ admin, message: "Un nouvel admin a été créé" })
				)
				.catch((error) =>
					res.status(400).json({ message: "Email invalide", error })
				);
		})
		.catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
	Admin.findOne({ email: req.body.email })
		.then((data) => {
			if (data === null) {
				res.status(401).json({
					message: "Paire d'identifiant incorrect",
					isConnected: false,
				});
			} else {
				bcrypt
					.compare(req.body.password, data.password)
					.then((valid) => {
						if (!valid) {
							res.status(401).json({
								message:
									"Paire identifiant/mot de passe incorrect",
								isConnected: false,
							});
						} else {
							res.status(200).json({
								message:
									"Vous êtes connecté en tant qu'administrateur!",
								isConnected: true,
								id: data._id,
								role: data.role,
								token: jwt.sign(
									{
										id: data._id,
										role: data.role,
									},
									secretToken,
									{ expiresIn: "24h" }
								),
							});
						}
					})
					.catch((error) =>
						res.status(500).json({ error, isConnected: false })
					);
			}
		})
		.catch((err) => {
			res.status(500).send(err);
		});
};

exports.getAllAdmin = (req, res, next) => {
	Admin.find()
		.then((admins) => {
			res.status(200).json({ message: "Liste admins trouvés", admins });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};
