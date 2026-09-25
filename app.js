const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js application!123-45");
});

app.listen(PORT, () => {
    console.log("hello-45")
  console.log(`Server running on port ${PORT}`);
});