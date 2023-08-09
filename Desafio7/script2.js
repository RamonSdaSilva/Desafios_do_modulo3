document.addEventListener("DOMContentLoaded", function () {
    const cadastrosTable = document.getElementById("cadastros");
    const storageKey = "dadosCadastro";
    
    const dadosSalvos = JSON.parse(localStorage.getItem(storageKey)) || [];
  
    for (const dados of dadosSalvos) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${dados.nome}</td>
        <td>${dados.email}</td>
        <td>${dados.telefone}</td>
        <td>${dados.cpf}</td>
      `;
      cadastrosTable.appendChild(row);
    }
  });
  