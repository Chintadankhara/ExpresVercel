import express from "express";
// import { Server } from "socket.io";
import {createServer} from 'http'

const port = 3000;

const app = express();
const server = createServer(app);
// const io = new Server(server);

// io.on("connection", (socket) => {

//   socket.on('chat',(msg)=>{
//     console.log(msg);
//     socket.except("101").emit("main",msg);
//   });
  
//   socket.on('disconnect',()=>{
//     console.log('user disconnected');
//   })
  
// });

app.get("/", (req, res) => {
  res.send("Hello World !");
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
