//promises

// const doSomethingPromise = new Promise((resolve, reject) => {
//   // throw new Error("Something went wrong");
//   setTimeout(function () {
//     resolve("First data");
//   }, 1000);
// });

// const doOtherThingPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("Second data");
//   }, 1000);
// });


const doSomethingPromise = () => new Promise((resolve, reject) => {
  // throw new Error("Something went wrong");
  setTimeout(function () {
    resolve("First data");
  }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
  // throw new Error("Something went wrong");
  setTimeout(function () {
    resolve("Second data");
  }, 1000);
});


// console.log(doOtherThingPromise);

//em sequencia

// doSomethingPromise()
//   .then((data) => {
//     console.log(data.split(""));
//     return doOtherThingPromise();
//   })
//   .then((data2) => console.log(data2.split("")))
//   .catch((error) => console.log("Ops", error));

  
// doSomethingPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//em paralelo

// Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
//   console.log(data)
// });

// Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
//   console.log(data[0].split(""));
//   console.log(data[1].split(""));
// });


// Promise.all([doSomethingPromise(), doOtherThingPromise()])
//   .then((data) => {
//     console.log(data[0].split(""));
//     console.log(data[1].split(""));
//   })
//   .catch((error) => console.log(error));

//retorna a primeira resolvida

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
  console.log(data)
});


//perding  em execucao
//fulfiled executada
//reject error


//callbacks
function doSomething(callback) {
  setTimeout(function () {
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    callback("Second data");
  }, 1000);
}

function doAll(callback) {
  try {
    doSomething(function (data) {
      var processedData = data.split("");

      try {
        doOtherThing(function (data2) {
          var processedData2 = data2.split("");

          try {
            setTimeout(function () {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (error) {
            // handle error
          }
        });
      } catch (error) {
        // handle error
      }
    });
  } catch (error) {
    // handle error
  }
}

// doAll();
