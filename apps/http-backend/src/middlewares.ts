import { NextFunction } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
export const middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["athorization"] ?? "";
  
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
// @ts-ignore

    res.userId = decoded.userId;
    next()
    
  } else {
    res.status(403).json({
      message : "Unauthorized"
    })
  }
}