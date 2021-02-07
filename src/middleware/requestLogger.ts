import { Request, Response, NextFunction } from "express";

const requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Method: ", req.method);
  console.log("Path: ", req.path);
  console.log("Body: ", req.body);
  console.log("----");
  next();
};

export default requestLogger;
