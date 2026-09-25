const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js application!123");
});

app.listen(PORT, () => {
    console.log("hello")
  console.log(`Server running on port ${PORT}`);
});