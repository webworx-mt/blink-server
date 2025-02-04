import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.send("Get User");
};

export const createUser = (req: Request, res: Response) => {
  res.send("Create User");
};
