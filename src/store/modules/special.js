import specials from '../../api/special'
import * as types from '../mutation-types'

const state = {
  subscribed: [],
  specials: []
}

const actions = {
  getSpecialBaseApi ({commit}) {
    console.log('进入action')
    specials.specialBaseMsgApi()
    .then(res => {
      console.log('action中调用封装后的axios成功')
      commit(types.GET_SPECIAL_API, res)
      // console.log(res)
    })
  },
  // 未定制增加
  add_nosubscribed: ({ commit }, index) => {
    commit(types.ADD_NOSUBSCRIBED, index)
  },
  // 未定制减少
  delete_nosubscribed: ({ commit }, index) => {
    commit(types.DELETE_NOSUBSCRIBED, index)
  },
  // 定制增加
  add_subscribed: ({ commit }, index) => {
    commit(types.ADD_SUBSCRIBED, index)
  },
  // 定制减少
  delete_subscribed: ({ commit }, index) => {
    commit(types.DELETE_SUBSCRIBED, index)
  },
  // 更新页面和数据
  update_all: ({ commit }, obj) => {
    commit(types.UPDATE_ALL, obj)
  }
}

const getters = {
  specials: state => state.specials,
  subscribed: state => state.subscribed
}

const mutations = {
  [types.GET_SPECIAL_API] (state, res) {
    console.log('进入mutation')
    state.specials = res.specials
    // console.log(state.specials)
    console.log('进入mutations修改state成功')
  },
  // 添加订阅
  [types.ADD_SUBSCRIBED] (state, index) {
    console.log(index)
    let temp = state.specials[index]
    state.specials.splice(index, 1)
    state.subscribed.push(temp)
  },
  [types.DELETE_NOSUBSCRIBED] (state, index) {
    console.log(index)
  },
  // 用数据块更新
  [types.UPDATE_ALL] (state, obj) {
    console.log(obj)
    // console.log(obj.temp_NoSubscribedArr)
    console.log(obj.tempSubscribedArr)
    state.subscribed = obj.tempSubscribedArr
    state.specials = obj.tempSpecialsArr
    console.log(state.subscribed)
    // console.log(state.noSubscribed)
    // console.log(state.subscribed)
    state.subscribed.map(item => {
      console.log(item)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
