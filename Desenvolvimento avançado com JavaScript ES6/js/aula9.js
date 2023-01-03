fetch("../assets/data.json")
  .then((responseStream) => {
    if (responseStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error("Request error");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

//   fetch("../assets/data.json", { method: "post",  body: {}})
//     .then((responseStream) => {
//       if (responseStream.status === 200) {
//         return responseStream.json();
//       } else {
//         throw new Error("Request error");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("Error:", err);
//     });
//es7

const asyncTimer = () =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });

const simpleFunc2 = async () => {
  const data = await asyncTimer();

  return data;
};

const simpleFunc = async () => {
  // throw new Error("oh no")
  return 12345;
};

console.log(simpleFunc());
console.log(simpleFunc2());

simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
