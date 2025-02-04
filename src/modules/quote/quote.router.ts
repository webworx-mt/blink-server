import express from "express";
import { getQuote, createQuote } from "./quote.handler";

const quoteRouter = express.Router();

quoteRouter.get("/", getQuote);
quoteRouter.post("/", createQuote);

export default quoteRouter;
