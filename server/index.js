const express = require("express");
const cors = require("cors");
const app = express();

const pageRoutes = require("./routes/index");

app.use(pageRoutes);
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
