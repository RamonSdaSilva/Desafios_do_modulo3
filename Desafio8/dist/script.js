"use strict";
const objetoForm = document.getElementById("objetoForm");
const cardsContainer = document.getElementById("cardsContainer");
const contador = document.getElementById("contador");
const objetos = [];
objetoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const tituloInput = document.getElementById("titulo");
    const dataInput = document.getElementById("data");
    const descricaoInput = document.getElementById("descricao");
    const novoObjeto = {
        titulo: tituloInput.value,
        data: dataInput.value,
        descricao: descricaoInput.value,
    };
    objetos.push(novoObjeto);
    atualizarListaDeCards();
    atualizarContador();
    objetoForm.reset();
});
function atualizarListaDeCards() {
    cardsContainer.innerHTML = "";
    objetos.forEach((objeto, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${objeto.titulo}</h2>
        <p>Data: ${objeto.data}</p>
        <p>${objeto.descricao}</p>
      `;
        cardsContainer.appendChild(card);
    });
}
function atualizarContador() {
    contador.textContent = objetos.length.toString();
}
//# sourceMappingURL=script.js.map