// need a server package
// need to distribute the server to people

import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("hallo world");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
