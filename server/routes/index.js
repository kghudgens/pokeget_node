const express = require("express");
const pokegetRoutes = require("./routes");

const router = express.Router();

router.use("/", pokegetRoutes);
router.use("/api", pokegetRoutes);

module.exports = router;
