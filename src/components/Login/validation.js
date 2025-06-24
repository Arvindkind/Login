// export function validateLogin({ email, password }) {
//   const errors = {};
//   if (!email) {
//     errors.email = "Email is required";
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!password) {
//     errors.password = "Password is required";
//   } else if (password.length < 6) {
//     errors.password = "Password must be at least 6 characters";
//   }
//   return errors;
// }

import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/yourdbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, "your_jwt_secret");
  res.json({ token });
});

app.listen(5000, () => console.log("Server running on port 5000"));
