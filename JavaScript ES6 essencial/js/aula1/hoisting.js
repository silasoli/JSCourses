function fn() {
  console.log(text);

  var text = "Exemplo";

  console.log(text);
}

fn();

function fn2() {
  log("hoisting de functions");

  function log(value) {
    console.log(value);
  }
}

fn2();
