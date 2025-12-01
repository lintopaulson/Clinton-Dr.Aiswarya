// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCoESeyODAg2ezeJxANpin4eFVA22zCr_0",
  authDomain: "wedding-project-70a31.firebaseapp.com",
  projectId: "wedding-project-70a31",
  storageBucket: "wedding-project-70a31.appspot.com",
  messagingSenderId: "104623360803",
  appId: "1:104623360803:web:784bd6c0b95f1e8cc39a96",
  measurementId: "G-55WJLRC0D8"
};

// ✅ Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Form & List
const wishForm = document.getElementById("wishForm");
const wishesList = document.getElementById("wishesList");

wishForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const wish = document.getElementById("wish").value.trim();

  if (!name || !wish) return; // prevent empty posts

  await addDoc(collection(db, "wishes"), {
    name,
    wish,
    timestamp: serverTimestamp()
  });

  wishForm.reset();
});

// ✅ Real-time Listener
const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));

onSnapshot(q, (snapshot) => {
  wishesList.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    const card = document.createElement("div");
    card.classList.add("wish-card");

  card.innerHTML = `
  <div class="wish-author">${data.name}</div>
  <div class="wish-text">${data.wish}</div>
`;

    wishesList.appendChild(card);
  });
});
