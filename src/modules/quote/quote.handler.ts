import { Request, Response } from "express";

export const getQuote = (req: Request, res: Response) => {
  res.send("Get Quote");
};

export const createQuote = (req: Request, res: Response) => {
  res.send("Create Quote");
};
