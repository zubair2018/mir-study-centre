// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA3n3HpztsHDcbUCcdiJLq7qLMtxTavAc",
  authDomain: "library-f6459.firebaseapp.com",
  projectId: "library-f6459",
  storageBucket: "library-f6459.firebasestorage.app",
  messagingSenderId: "570089349286",
  appId: "1:570089349286:web:e3dadd4efa340cab5e1467"
};

// Initialize Firebase using compat scripts
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth && firebase.auth();