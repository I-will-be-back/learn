// for of
function* test() {
  yield 1;
  yield 2;
  yield 3;
}

let g = test();
console.log(g[Symbol.iterator]);
for (let value of g) {
  console.log(value);
}