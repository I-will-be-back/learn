import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from './redux/index';

function foo(state = 0, action) {
  switch(action.type) {
    case 'ADD':
      return state + 1;
    case 'DELETE':
      return state - 1;
    default:
      return state;  
  }
}
function bar(state = 'INIT', action) {
  switch(action.type) {
    case 'CHANGE':
      return action.content;
    default:
      return state;  
  }
}
const index = combineReducers({ foo, bar });
const store = createStore(index);
class Home extends React.Component {
  handleAdd = () => {
    store.dispatch({
      type: 'ADD'
    });
  }

  render() {
    const reduxStore = store.getState();
    return (
      <div>
        foo: { reduxStore.foo }
        bar: { reduxStore.bar }
        <button onClick={this.handleAdd}>添加</button>
      </div>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<Home />, document.getElementById('root'));
})