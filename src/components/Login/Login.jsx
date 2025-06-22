import React, { useState } from "react";
import "./Login.css";
import { validateLogin } from "./validation";
import GoogleAuthButton from "./auth/GoogleAuthButton";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ...existing code...
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
      setForm({ email: "", password: "" }); // <-- Add this line
    }, 1200);
    // ...existing code...
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 1200);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign In</h2>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoFocus
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>
        <div className="divider">or</div>
        <GoogleAuthButton />
      </form>
    </div>
  );
};

export default Login;
