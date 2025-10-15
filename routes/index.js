const express = require("express");
const router = express.Router();
const foodRouter = require("./foods/foods");

router.use("/foods", foodRouter);

module.exports = router;