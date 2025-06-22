// This is a placeholder. In production, use Firebase Auth or Google Identity Services.
export function signInWithGoogle() {
  /* global google */
//   const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Google OAuth Client ID
const clientId = "1234567890-abcde12345fghij.apps.googleusercontent.com";

  // Create a div for the button if not present
  let btnDiv = document.getElementById("google-btn-div");
  if (!btnDiv) {
    btnDiv = document.createElement("div");
    btnDiv.id = "google-btn-div";
    document.body.appendChild(btnDiv);
  }

  google.accounts.id.initialize({
    client_id: clientId,
    callback: (response) => {
      // Handle the response. You get a JWT token in response. Send it to your backend for verification.
      alert("Google Sign-In Success!\nJWT: " + response.credential);
      // You can decode the JWT or send it to your backend here.
    },
  });

  google.accounts.id.prompt(); // Shows the One Tap prompt
}