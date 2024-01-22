// need a server package
// need to distribute the server to people

import express from "express";
import "dotenv/config";

const app = express();
const router = express.Router();

app.use(router);

const PORT = process.env.PORT || 3000;

router.get("/", (req, res) => {
  res.send("hallo world");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
