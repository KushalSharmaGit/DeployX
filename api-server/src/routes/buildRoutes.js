const express = require("express");
const router = express.Router();
const {buildweb} = require('../controller/buildController')
const {isAuthenticated} = require('../Middelware/isAuthenticated');


router.post('/', buildweb)

module.exports = router;
