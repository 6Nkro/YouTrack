import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import accountRoute from "./routes/accountRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB connected!"))
  .catch((err: Error) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/account", accountRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
