interface Objeto {
    titulo: string;
    data: string;
    descricao: string;
  }
  
  const objetoForm = document.getElementById("objetoForm") as HTMLFormElement;
  const cardsContainer = document.getElementById("cardsContainer") as HTMLDivElement;
  const contador = document.getElementById("contador") as HTMLSpanElement;
  
  const objetos: Objeto[] = [];
  
  objetoForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const tituloInput = document.getElementById("titulo") as HTMLInputElement;
    const dataInput = document.getElementById("data") as HTMLInputElement;
    const descricaoInput = document.getElementById("descricao") as HTMLTextAreaElement;
  
    const novoObjeto: Objeto = {
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
  