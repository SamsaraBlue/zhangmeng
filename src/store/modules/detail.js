import * as types from '../mutation-types.js'
import axios from 'axios'

const state = {
  detail: {}
}

const getters = {
  [types.DONE_NEWS_DETAIL]: state => {
    return state.NewsDetail
  }
}

const mutations = {
  [types.TOGGLE_NEWS_DETAIL](state, all) {
    String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    }
    all.body = all.body.replaceAll('src=\"', 'src=\"http://lovestreet.leanapp.cn/zhihu/resource?url=')
    all.body = all.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
    state.NewsDetail = all
    state.LoadingTwo = false
  }
}

const actions = {
  [types.FETCH_NEWS_DETAIL]({commit}, id) {
    state.LoadingTwo = true
    axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/' + id)
      .then(res => {
          commit(types.TOGGLE_NEWS_DETAIL, res.data)
      }).catch(err => console.log(err))
  }
}
