import { Request, Response } from "express";

export const getClaim = (req: Request, res: Response) => {
  res.send("Get Claim");
};

export const createClaim = (req: Request, res: Response) => {
  res.send("Create Claim");
};
