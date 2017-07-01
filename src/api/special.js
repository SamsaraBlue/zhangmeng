import axios from 'axios'

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
    .then(response => {
      console.log('Api--ok')
      resolve(response.data)
      // console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    })
  })
}

export default {
  // 获取我的页面的后台数据
  specialBaseMsgApi () {
    console.log('进入api.js')
    return fetch('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/special')
  }
}
