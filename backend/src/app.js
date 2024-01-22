// need a server package
// need to distribute the server to people

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hallo world");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
