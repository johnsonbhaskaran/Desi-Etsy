import express, { json } from "express";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(json());

app.get("/", (req, res) => {
  res.send("Hi This from the express node js framework.");
});

app.listen(5000, () => {
  console.log(`Server running on Locahost port: ${PORT}`);
});
