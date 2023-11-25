const express = require("express");
const app = express();

const pageRoutes = require("./routes/index");

app.use(pageRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
