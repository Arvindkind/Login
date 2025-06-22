import React from "react";
import { signInWithGoogle } from "./googleAuthService";
import "./GoogleAuthButton.css";
import viteLogo from "/vite.svg"; // Adjust path as necessary

const GoogleAuthButton = () => (
  <button className="google-btn" onClick={signInWithGoogle} type="button">
    <img
      src={viteLogo}
      alt="Google"
      className="google-icon"
    />
    Sign in with Google
  </button>
);

export default GoogleAuthButton;