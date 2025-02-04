import express from "express";
import { getUser, createUser } from "./user.handler";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);

export default userRouter;
