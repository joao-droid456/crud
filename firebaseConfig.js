import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUN1zIPCeGcBczMogmMifxZVZcDyK5mho",
  authDomain: "crud-b6ca3.firebaseapp.com",
  databaseURL: "https://crud-b6ca3-default-rtdb.firebaseio.com", // importante!
  projectId: "crud-b6ca3",
  storageBucket: "crud-b6ca3.appspot.com",
  messagingSenderId: "441213495407",
  appId: "1:441213495407:web:faa9f23db4586f8f7e859a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // exportando database