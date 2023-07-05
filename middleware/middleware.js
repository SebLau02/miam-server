module.exports = (req, res, next) => {
	try {
		//********** fonction ici **********

		next();
	} catch (error) {
		res.status(401).json({ error });
	}
};
