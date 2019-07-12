export const createStore = (reducer, preloadedState) => {
  // 组件
  const listeners = [];
  let store = preloadedState;
  // console.log('store', store);
  // 订阅发布者
  // listen callback
  const subscribe = (listen) => listeners.push(listen);
  const dispatch = (action) => {
    store = reducer(store, action);
    listeners.forEach(item => {
      // 新的store
      item();
    });
  }
  const getState = () => {
    return store;
  }
  dispatch({ type: '@@redux/INIT'});
  return { store, dispatch, subscribe,getState };
}

export default createStore;