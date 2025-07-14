import express from "express";

const app = express();

const PORT = 3000;

app.get("/",(req, res)=>{
  res.send("Hello in chintan !");
})

app.listen(PORT, ()=>{
  `Server start on a port ${PORT}`;
})