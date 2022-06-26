function getName() {
  return "Silas Santos";
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
