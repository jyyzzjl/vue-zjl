import { INIT_PAGE } from '../mutation-types'
import { INIT_PAGE_ACTION } from '../action-types'
 
// initial state
const state = {
  page:'this is an index'
}

// mutations，表示对所有state数据的操作
const mutations = {
  [INIT_PAGE](state, page) {
    state.page = page
  },
}
const actions={
    [INIT_PAGE_ACTION]({commit},page){
        commit(INIT_PAGE, page)
    }
}

export default {
  state,
  mutations,
  actions
}
