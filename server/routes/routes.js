const express = require("express");
const app = express();

const router = express.Router();

// home page
router.get("/", (req, res) => {
  res.send("home");
});

// test api
router.get("/api", (request, result) => {
  result.json({
    message: "Hello from server",
  });
});

module.exports = router;
