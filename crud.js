import { db } from "./firebaseConfig.js";
import { ref, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";


export const createCharacter = (character) => {
  const charactersRef = ref(db, "characters");
  push(charactersRef, character);
};


export const onGetCharacters = (callback) => {
  const charactersRef = ref(db, "characters");
  onValue(charactersRef, (snapshot) => {
    const data = snapshot.val() || {}; 
    callback(data);
  });
};


export const updateCharacter = (id, character) => {
  const charRef = ref(db, "characters/" + id);
  update(charRef, character);
};


export const deleteCharacter = (id) => {
  const charRef = ref(db, "characters/" + id);
  remove(charRef);
};
