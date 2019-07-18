(async function () {
  let a = await 1;
  let b = await 2;
})()
function foo() {
  console.log('foo call');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 3000);
  })
}
_asyncToGenerator(function* () {
  let a = yield 1;
  console.log('a', a);
  let c = yield foo();
  console.log('c', c);
  let b = yield 2;
  console.log('b', b);
})
function _asyncToGenerator(genFunc) {
  return new Promise((resolve, reject) => {
    let g = genFunc();
    function step(key, value) {
      let info = {};
      // g.next
      info = g[key](value)
      if (info.done) {
        resolve(info.value);
      } else {
        // return info.value.then(() => {
        // })
        return Promise.resolve(info.value)
        .then(res => {
          // 1 // 123
          return step('next', res);
        })
      }
    };
    step('next');
  })
}
// foo().then(() => {
//   Promsie.then(() => {
//     Promsie.then(() => {
//       Promsie.then(() => {
//       })
//     })
//   })
// })
console.log(1);
// async function foo(){
//   await bar()
//   console.log(2)
// }
// function bar() {
//   console.log(3)
// }
function foo() {
  console.log(3);
  Promise.resolve().then(() => {
    console.log(2)
  })
}
foo()
console.log(4);
