// script.js
import { db } from './firebase-config.js';
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const container = document.getElementById("voluntarios-container");

async function cargarVoluntarios() {
  const querySnapshot = await getDocs(collection(db, "voluntarios"));
  container.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const div = document.createElement("div");
    div.className = "voluntario";
    div.innerHTML = `
      <img src="${data.foto}" alt="foto">
      <h3>${data.nombre}</h3>
      <p>Puntos: <span id="puntos-${docSnap.id}">${data.puntos}</span></p>
      <div class="buttons">
        <button onclick="modificarPuntos('${docSnap.id}', ${data.puntos}, 1)">+1</button>
        <button onclick="modificarPuntos('${docSnap.id}', ${data.puntos}, -1)">-1</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.modificarPuntos = async function(id, actual, cambio) {
  const ref = doc(db, "voluntarios", id);
  const nuevoValor = actual + cambio;
  await updateDoc(ref, { puntos: nuevoValor });
  document.getElementById(`puntos-${id}`).innerText = nuevoValor;
};

cargarVoluntarios();
