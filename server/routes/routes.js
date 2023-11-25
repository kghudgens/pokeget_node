const express = require("express");
const app = express();
const router = express.Router();

// home page
router.get("/", (req, res) => {
  console.log("Connected");
  res.send("home");
});

// test api
router.get("/api", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

module.exports = router;
