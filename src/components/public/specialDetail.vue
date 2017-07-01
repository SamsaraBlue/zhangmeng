<template lang="html">
  <div class="container">
    <div class="wrap">
      <div class="header">
        <div class="header_content">
          <div class="left" v-on:click="back"><span class="left_icon"></span></div>
          <div class="title">专栏详情</div>
          <div class="right">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="specials">
        <img :src="specialDetail.img" alt="">
        <div class="list_content">
          <h4>{{specialDetail.title}}</h4>
          <div class="resource">{{specialDetail.resource}}</div>
        </div>
        <div class="follow_btn">已订阅</div>
      </div>
      <div class="produce">{{specialDetail.produce}}</div>
    </div>
    <item-list></item-list>
    <div class="mistake">
      <div class="content">
        <img src="../../assets/img/mistake.png" alt="">
        <p class="noresult">程序员小姐姐还没有Mock好数据哦~</p>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/public/ItemList'
export default {
  data () {
    return {
      specialDetail: {}
    }
  },
  components: {
    ItemList
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/specialdetail/' + this.$route.params.id)
    .then((response) => {
      this.specialDetail = response.data
      // console.log(this.news)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  & .wrap {
    height: 12rem;
    color: #d0ad77;
    background: url('../../assets/img/bg.png');
    background-size: cover;
    text-align: center;
    & .header {
      height: 4rem;
      background-size: cover;
      color: #d0ad77;
      font-size: 1rem;
      & .header_content {
        width: 100%;
        height: 2rem;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        flex-flow: row;
        padding-top: 1.4rem;
        & .left {
          padding-left: 1.5rem;
          padding-top: .5rem;
          & .left_icon {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid #d0ad77;
            border-bottom: none;
            border-right: none;
            transform: rotateZ(-45deg);
          }
        }
        & .title {
          flex: 1;
          text-align: center;
          font-size: 1.1rem;
          height: 2rem;
          line-height: 2rem;
        }
        & .right {
          padding-right: 1.5rem;
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
              margin-right: .2rem;
            }
          }
        }
      }
    }
    & .specials {
      margin: .4rem .6rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      & img {
        width: 3.5rem;
        height: 3.5rem;
        padding: .5rem;
        border-radius: 50%;
      }
      & .list_content {
        padding: 1rem .8rem .5rem .2rem;
        flex: 1;
        text-align: left;
        & h4 {
          font-weight: 500;
          font-size: 1rem;
          color: #ffffff;
        }
        & .resource {
          margin-top: .1rem;
          font-size: .7rem;
          color: #767676;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      & .follow_btn {
        width: 3.8rem;
        height: 1.5rem;
        margin-top: 1.2rem;
        margin-right: .5rem;
        border: 1px solid #767676;
        font-size: .85rem;
        line-height: 1.5rem;
        color: #767676;
        border-radius: 3px;
      }
    }
    & .produce {
      padding: 0 .9rem;
      font-size: .7rem;
      letter-spacing: 1px;
      color: #767676;
      text-align: left;
    }
  }
}
</style>
