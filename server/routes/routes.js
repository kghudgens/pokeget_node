import express from "express";

const router = express.Router();

// home page
router.get("/", (req, res) => {
  console.log("Connected");
  res.send("home");
});

// endpoint to see all past searches
router.get("/history", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

router.get("/about"),
  (req, res) => {
    res.json({
      message: "About page",
    });
  };
export default router;
