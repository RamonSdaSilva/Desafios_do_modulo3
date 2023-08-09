document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    const limparButton = document.getElementById("limpar");
  
    cadastroForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const cpf = document.getElementById("cpf").value;
  
      const dados = {
        nome,
        email,
        telefone,
        cpf,
      };
  
      salvarNoStorage(dados);
      window.location.href = "Tabela.html";
    });
  
    limparButton.addEventListener("click", function () {
      cadastroForm.reset();
    });
  });
  
  function salvarNoStorage(dados) {
    const storageKey = "dadosCadastro";
    let dadosSalvos = localStorage.getItem(storageKey);
  
    if (dadosSalvos) {
      dadosSalvos = JSON.parse(dadosSalvos);
      dadosSalvos.push(dados);
    } else {
      dadosSalvos = [dados];
    }
  
    localStorage.setItem(storageKey, JSON.stringify(dadosSalvos));
  }
  