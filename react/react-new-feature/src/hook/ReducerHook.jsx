import React, { useReducer } from 'react';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw Error('error');
  }
}

function Index() {
  const [state, dispatch] = useReducer(reducer);
  return (
    <div>
      state: {state},
      <button onClick={() => {
        dispatch({type: 'INCREMENT'})
      }}>INCREMENT</button>
    </div>
  );
}

export default Index;