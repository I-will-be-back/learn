function debounce(func, time) {
  let timer;
  return function delay(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
}

export default debounce;
