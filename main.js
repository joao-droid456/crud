import { createCharacter, onGetCharacters, updateCharacter, deleteCharacter } from "./crud.js";

const charForm = document.getElementById("charForm");
const charList = document.getElementById("charList");

let editId = null;

// Renderizar personagens em tempo real
onGetCharacters((data) => {
  charList.innerHTML = "";
  // data é um objeto { id1: {...}, id2: {...} }
  Object.entries(data).forEach(([id, char]) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${char.name} (${char.classe}) 
      <button class="edit">Editar</button>
      <button class="delete">Excluir</button>
    `;

    li.querySelector(".edit").addEventListener("click", () => {
      document.getElementById("name").value = char.name;
      document.getElementById("classe").value = char.classe;
      editId = id;
    });

    li.querySelector(".delete").addEventListener("click", () => {
      deleteCharacter(id);
    });

    charList.appendChild(li);
  });
});

// Submeter formulário
charForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const classe = document.getElementById("classe").value;

  if (editId) {
    updateCharacter(editId, { name, classe });
    editId = null;
  } else {
    createCharacter({ name, classe });
  }

  charForm.reset();
});