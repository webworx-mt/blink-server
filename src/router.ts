import express, { Router } from "express";
import claimRouter from "./modules/claim/claim.router";
import quoteRouter from "./modules/quote/quote.router";
import userRouter from "./modules/user/user.router";

const router = express.Router();

router.use("/claim", claimRouter);
router.use("/quote", quoteRouter);
router.use("/user", userRouter);

export default router as Router;
