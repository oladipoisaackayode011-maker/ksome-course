import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1LV-g2H3yKs_6nbruF1TEbCoV34UX0jI",
  authDomain: "ksome-website.firebaseapp.com",
  projectId: "ksome-website",
  storageBucket: "ksome-website.firebasestorage.app",
  messagingSenderId: "970299265208",
  appId: "1:970299265208:web:870e4de77e51e9032e644d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ── SIGNUP ──────────────────────────────────────────
window.signup = function () {
  const email    = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm  = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created! Please log in.");
      window.location = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
};

// ── LOGIN ───────────────────────────────────────────
window.login = function () {
  const email    = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "my-course.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
};

// ── LOGOUT ──────────────────────────────────────────
window.logout = function () {
  signOut(auth).then(() => {
    window.location = "index.html";
  });
};

