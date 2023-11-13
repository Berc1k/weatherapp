// import * as express from "express";
import "./db/index";
import express, { Request, Response } from "express";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/user/register", function (req: Request, res: Response) {
  const { email, password } = req.body;

  const newUser = {
    email,
    password,
  };

  res.status(201).json({ message: "New User is created", user: newUser });
});

app.listen(8080, () => {
  console.log("serwer działa na porcie 8080");
});
