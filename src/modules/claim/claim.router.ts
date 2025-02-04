import express from "express";
import { getClaim, createClaim } from "./claim.handler";

const claimRouter = express.Router();

claimRouter.get("/", getClaim);
claimRouter.post("/", createClaim);

export default claimRouter;
