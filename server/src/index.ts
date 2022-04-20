import express from "express";
import routes from "./routes/index";
import cors from "cors";
import startDB from "./startup/db";
import "dotenv/config";

const app = express();
const port = 4000;

startDB();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
