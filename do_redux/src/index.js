import {  state } from './redux/state';
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/createStore';

const { store, dispatch, subscribe } = createStore(state, storeChange);

function renderHead(state) {
  console.log('render head');
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
}

function renderBody(state) {
  console.log('render body');
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}

// function render(state, name) {
//   const el = document.getElementById(name);
//   el.innerText = state[name].text;
//   el.style.color = state[name].color;
// }

function renderApp(state, oldState = {}) {
  if (state === oldState) return;
  state.head !== oldState.head && renderHead(state.head);
  state.body !== oldState.body && renderBody(state.body);
  // render(state, 'head');
  // render(state, 'body');
}

subscribe((store, oldState) => renderApp(store, oldState));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是经过head修改的body'});
// renderAPP(store) 性能开销太大