// importing
import express from "express";
import "dotenv/config";
import router from "./routes/router.js";

// running app and getting router
const app = express();
// using jason
app.use(express.json());
// using router
app.use(router);

// getting port from .env
const PORT = process.env.PORT || 3000;

// app listen
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
