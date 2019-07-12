import types from '../types';

const state = {
  showSidebar: true,
};

const mutations = {
  [types.COM_SHOW_SIDE_BAR](oldstate, status) {
    const newState = oldstate;
    newState.showSidebar = status;
  },
};

const actions = {
  setShowSidebar({ commit }, status) {
    commit(types.COM_SHOW_SIDE_BAR, status);
  },
};

const getters = {
  showSidebar: astate => astate.showSidebar,
};

export default {
  state, mutations, actions, getters,
};
