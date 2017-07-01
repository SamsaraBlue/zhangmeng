import news from '../../api/news'
import * as types from '../mutation-types'

const state = {
  news: []
}

const actions = {
  getNewsBaseApi ({commit}) {
    console.log('进入action')
    news.newsBaseMsgApi()
    .then(res => {
      console.log('action中调用封装后的axios成功')
      commit(types.GET_NEWS_API, res)
      console.log(res)
    })
  }
}

const getters = {
  allNews: state => state.news
}

const mutations = {
  [types.GET_NEWS_API] (state, res) {
    console.log('进入mutation')
    state.news = news
    console.log('进入mutations修改state成功')
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
