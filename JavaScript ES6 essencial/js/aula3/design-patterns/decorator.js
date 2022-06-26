let loggedIn = false;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}

//Só vai executar a função se estiver autenticado.
console.log(callIfAuthenticated(() => sum(2, 3)));

loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));

loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));
