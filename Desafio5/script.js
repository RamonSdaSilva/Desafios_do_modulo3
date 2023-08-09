document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const inputString = document.getElementById("inputString");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const string = inputString.value;
    const vogal = extrair(string);
    result.textContent = "Vogais encontradas: " + vogal.join(", ");
  });
});

function extrair(str) {
  const vogal = str.match(/[aeiouAEIOU]/g);
  return vogal ? vogal : [];
}
