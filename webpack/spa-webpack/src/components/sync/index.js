import lodash from 'lodash-es';
import style from './index.css';

const sync = function() {
  console.log('sync');
  document.getElementById('root').innerHTML = `<h1 class=${style.test}>sdf</h1>`;
}
const testIsArray = function(arg) {
  console.log('isArray');
  console.log(lodash.isArray(arg));
}

export {
  sync,
  testIsArray
}