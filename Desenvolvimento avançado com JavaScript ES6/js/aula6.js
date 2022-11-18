const uniqueId1 = Symbol("Hello");
const uniqueId2 = Symbol("Hello");

console.log(uniqueId1);
console.log(uniqueId2);
console.log(uniqueId1 === uniqueId2);

const obj = {
  [uniqueId1]: "Hello",
};

console.log(obj);

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) {
  let { value, done } = it.next();
  console.log(value);
  if (done) {
    break;
  }
}

for (const iterator of arr) {
  console.log(iterator);
}

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const obj2 = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++
        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};

const it2 = obj2[Symbol.iterator]();
console.log(it2.next());
