// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZr4J0sSjqbeTDoyjDE-_lVCytlde_nAE",
  authDomain: "puntosvoluntarios-b9af5.firebaseapp.com",
  databaseURL: "https://puntosvoluntarios-b9af5-default-rtdb.firebaseio.com",
  projectId: "puntosvoluntarios-b9af5",
  storageBucket: "puntosvoluntarios-b9af5.firebasestorage.app",
  messagingSenderId: "531653166997",
  appId: "1:531653166997:web:5df264e360fbcb0d14d89c",
  measurementId: "G-MBCMCHBYPV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
