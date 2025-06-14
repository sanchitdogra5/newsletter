
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAEMP_gHBxkKFF7TXOD4ADaH7C_qeo1fqM",
    authDomain: "email-subscription-dda4d.firebaseapp.com",
    databaseURL: "https://email-subscription-dda4d-default-rtdb.firebaseio.com",
    projectId: "email-subscription-dda4d",
    storageBucket: "email-subscription-dda4d.appspot.com",
    messagingSenderId: "448054685690",
    appId: "1:448054685690:web:e54d52e042302625d1be43",
    measurementId: "G-R0M2XPY2CY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  // Form submission handler
  function submitEmail(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="EMAIL"]').value;

    if (email) {
      const subscribersRef = ref(database, 'subscribers');
      push(subscribersRef, { email })
        .then(() => alert('Subscribed successfully!'))
        .catch((error) => console.error('Error saving email:', error));
    } else {
      alert('Please enter a valid email.');
    }
  }
