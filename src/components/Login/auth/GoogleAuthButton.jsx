import { signInWithGoogle } from "./googleAuthService";
import "./GoogleAuthButton.css";

const GOOGLE_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";

const GoogleAuthButton = () => (
  <button
    className="google-btn"
    onClick={signInWithGoogle}
    type="button"
    aria-label="Sign in with Google"
  >
    <img
      src={GOOGLE_ICON}
      alt="Google logo"
      className="google-icon"
      width={22}
      height={22}
      style={{ marginRight: 8 }}
    />
    <span>Sign in with Google</span>
  </button>
);

export default GoogleAuthButton;
