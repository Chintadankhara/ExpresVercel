// api/index.js
import express from "express";
import { createServer } from "http";
import { default as serverless } from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

export default serverless(app);
