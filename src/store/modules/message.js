import messages from '../../api/message'
import * as types from '../mutation-types'

const state = {
  messages: []
}

const actions = {
  getMessagesBaseApi ({commit}) {
    console.log('进入action')
    messages.messagesBaseMsgApi()
    .then(res => {
      console.log('action中调用封装后的axios成功')
      commit(types.GET_MESSAGES_API, res)
      console.log(res)
    })
  }
}

const getters = {
  allMessages: state => state.messages
}

const mutations = {
  [types.GET_MESSAGES_API] (state, res) {
    console.log('进入mutation')
    state.messages = res.messages
    console.log('进入mutations修改state成功')
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
