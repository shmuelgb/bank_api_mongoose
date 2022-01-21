const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));

app.get("/api", (req, res) => {
  res.send("Working!!!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
