export const createStore = (state, storeChange) => {
  const store = state || {};
  // 组件
  const listeners = [];
  // 订阅发布者
  // listen callback
  const subscribe = (listen) => listeners.push(listen);
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    listeners.forEach(item => {
      // 新的store
      // console.log('item',item);
      item(newStore, store);
    });
  }
  return { store, dispatch, subscribe };
}