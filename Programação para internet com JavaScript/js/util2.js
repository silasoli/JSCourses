function clicou() {
  alert("Obrigado por clicar");
}

function clicou2() {
  const element = document.getElementById("agradecimento");
  element.innerHTML = "Obrigado por clicar";
  console.log(element);
}

function clicou3() {
  const element = document.getElementById("agradecimento2");
  element.innerHTML = "<b>Obrigado por clicar</b>";
  console.log(element);
}

function redirect() {
  window.open("https://github.com/Silasoli");
  window.location.href = "https://github.com/Silasoli";
}

function openHere() {
  window.location.href = "https://github.com/Silasoli";
}

function replaceText() {
  const element = document.getElementById("mousemove");
  element.innerHTML = "Obrigado por passar o mouse";
}

function returnText(element) {
  element.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Bem vindo(a)!")
}

function change(element){
    alert(element.value)
}