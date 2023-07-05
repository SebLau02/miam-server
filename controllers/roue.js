exports.controller = (req, res, next) => {


	//********** fonction ici **********
	

		.save()
		.then(() => {
			res.status(201).json({ message: "" });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};