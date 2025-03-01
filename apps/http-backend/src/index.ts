import express from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";
import { middleware } from "./middlewares";

const app = express();

app.post("/signup", (req, res) => {

  res.json({
    userId:"253"
  })

})

app.post("/signin", (req, res)=>{

  const userId = 1;
 const token = jwt.sign({userId}, JWT_SECRET);

 res.json({token})
})

app.post("/room", middleware, (req, res)=> {
  res.json({
    roomId : 534
  })

})

app.listen(3001)