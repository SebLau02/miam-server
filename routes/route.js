const express = require("express");
const router = express.Router();

//********** import des controllers et middleware **********

router.typeRequete("uri", middleware, controllers);

module.exports = router;
