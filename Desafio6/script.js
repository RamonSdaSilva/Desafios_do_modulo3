document.addEventListener("DOMContentLoaded", function () {
    const freteForm = document.getElementById("freteForm");
    const resultado = document.getElementById("resultado");
  
    freteForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const peso = parseFloat(document.getElementById("peso").value);
      const distancia = parseFloat(document.getElementById("distancia").value);
  
      const valorDoFrete = calcularFrete(peso, distancia);
  
      resultado.textContent = `Valor do frete: R$ ${valorDoFrete.toFixed(2)}`;
    });
  });
  
  function calcularFrete(pesoEmGramas, distanciaEmKm) {
    const valorPorGrama = 0.08;
    const valorPorKm = 0.45;
  
    const valorFretePeso = pesoEmGramas * valorPorGrama;
    const valorFreteDistancia = distanciaEmKm * valorPorKm;
    let valorFreteTotal = valorFretePeso + valorFreteDistancia;
  
    if (distanciaEmKm > 100 && distanciaEmKm <= 300) {
      valorFreteTotal += valorFreteTotal * 0.0697;
    } else if (distanciaEmKm > 300) {
      valorFreteTotal += valorFreteTotal * 0.1362;
    }
  
    return valorFreteTotal;
  }
  