import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Account = mongoose.model("Account", accountSchema);

export default Account;
