<template lang="html">
  <div class="container">
    <div class="header">
      <input type="text" placeholder="搜索你想了解的资讯" autofocus @keypress.enter="search(key)" v-model="key">
      <router-link class="cancle" to="/info/new">取消</router-link>
    </div>
    <div class="result" v-if="searchRes">
      <div class="result_item" v-for="(item, index) in items" key="item.id" @click="displayDetail(item.id)">
        <p class="result_title">{{item.title}}</p>
        <div class="right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mistake" v-else>
      <div class="content">
        <img src="../../assets/img/mistake.png" alt="">
        <p class="noresult">没有找到您需要的资讯</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      key: '',
      items: '',
      searchShow: false,
      keywords: '',
      searchRes: true
    }
  },
  methods: {
    search (key) {
      this.keywords = key
      this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/detail')
      .then((response) => {
        let searchRes = response.data
        console.log(searchRes)
        for (let i in searchRes) {
          let item = i
          console.log(item)
          console.log(item.indexOf(this.keywords))
          if (item.indexOf(this.keywords) !== -1) {
            this.items = searchRes[item]
            console.log(this.items)
          }
        }
        if (this.items.length > 0) {
          this.searchRes = true
        } else {
          this.searchRes = false
        }
        console.log(this.searchRes)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    displayDetail (id) {
      this.$router.push({name: 'detail', params: {'id': id}})
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  width: 100%;
  -webkit-tap-highlight-color:rgba(255,255,255,0);
}
.container {
  background-color: #f1f1f1;
  height: 50rem;
  & .header {
    height: 5rem;
    background: url('../../assets/img/bg.png');
    background-size: cover;
    color: #d0ad77;
    font-size: 1rem;
    & input {
      display: inline-block;
      width: 71%;
      height: 2rem;
      border: none;
      background-color: rgba(255,255,255,.1);
      border-radius: 5px;
      margin: 2.3rem 0 .5rem .7rem;
      font-size: 1rem;
      padding-left: 1.8rem;
      color: #d0ad77;
    }
    & .cancle {
      display: inline-block;
      margin-top: 2.5rem;
      width: 3.8rem;
      text-align: center;
      font-size: 1.2rem;
      float: right;
    }
  }
  & .result {
    height: 100%;
    background-color: #f4f4f4;
    & .result_item {
      background-color: #ffffff;
      height: 3rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      border-bottom: 1px solid #eaeaea;
      & .result_title {
        font-size: .9rem;
        line-height: 3rem;
        flex: 1;
        padding-left: 1rem;
      }
      & .right {
        padding-right: 1rem;
        padding-top: .5rem;
        & ul {
          padding-top: .8rem;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          & li {
            width: .3rem;
            height: .3rem;
            border-radius: 50%;
            border: 1px solid #d0ad77;
            background-color: #d0ad77;
            margin-right: .2rem;
          }
        }
      }
    }
  }
  & .mistake {
    width: 100%;
    height: 50rem;
    background-color: #ffffff;
    & .content {
      padding-top: 5rem;
      & img {
        display: block;
        width: 8rem;
        height: 10rem;
        margin: 0 auto;
      }
      & p {
        color: #909090;
        text-align: center;
      }
    }
  }
}
</style>
