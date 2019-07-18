function* test() {
  let a = yield 1;
  // g.next('bbb'); a = bbb;
  console.log('a:', a); // a:bbb 
  yield 2;
  yield 3;
}

// generate函数是惰性的

function* test1() {
  let a = yield true;
  console.log(a);
  let b = yield false;
  console.log(b);
}
autoRun(test1);
console.log('------------');
autoRun(test);

function autoRun(generate) {
  let g = generate();
  let gn = g.next();
  while(!gn.done) {
    gn = g.next(gn.value);
  }
}

function autorun1(genfun) {
  let g = genfun();
  function next(value) {
    let gn = g.next(value);
    if (gn.done) return;
    next(gn.value);
  }
  next();
}

console.log('************');
autorun1(test1);