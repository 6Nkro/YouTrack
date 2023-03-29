import { Request, Response } from "express";
import Account from "../models/account";

export const findAccount = async (req: Request, res: Response) => {
  try {
    const accountState = await Account.find();
    res.status(200).json(accountState);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ message: "Account created" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
