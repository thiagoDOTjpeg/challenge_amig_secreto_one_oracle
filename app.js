//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrAmigos = [];

function adicionarAmigo() {
  let nome = document.querySelector("#amigo").value;
  let listaAmigos = document.querySelector("#listaAmigos");
  if (nome == null || nome == "") {
    alert("Informe o nome do amigo");
    return;
  }
  arrAmigos.push(nome);
  console.log(arrAmigos);
  listaAmigos.appendChild(document.createTextNode(nome));
  listaAmigos.appendChild(document.createElement("br"));
}

function sortearAmigo() {
  let arrAmigosSorteados = arrAmigos;
  let amigoSorteado =
    arrAmigosSorteados[Math.floor(Math.random() * arrAmigosSorteados.length)];
  let resultado = document.querySelector("#resultado");
  resultado.innerHTML = amigoSorteado;
}
