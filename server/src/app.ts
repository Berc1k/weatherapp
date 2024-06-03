// import * as express from "express";
import "./db/index";
import express, { Request, Response } from "express";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/weather/get", function (req: Request, res: Response) {
  res.status(201).json({ message: "connected to database" });
});

app.listen(8080, () => {
  console.log("serwer działa na porcie 8080");
});
