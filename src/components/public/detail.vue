<template lang="html">
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="left" v-on:click="back"><span class="left_icon"></span></div>
        <div class="title">资讯详情</div>
        <div class="right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content_box">
      <div class="content">
        <div class="title">{{detail.title}}</div>
        <div class="info">
          <div class="resource">{{detail.resource}}</div>
          <div class="date">{{detail.date}}</div>
        </div>
        <div class="main_content1">{{detail.content1}}</div>
        <img :src="detail.img1" alt="">
        <div class="main_content2">{{detail.content1}}</div>
        <img :src="detail.img2" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/detail/' + this.$route.params.id)
    .then((response) => {
      this.detail = response.data
      // console.log(this.news)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f1f1f1;
  height: 100%;
  & .header {
    height: 4rem;
    background: url('../../assets/img/bg.png');
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
  & .content_box {
    background-color: #ffffff;
    & .content {
      padding: 1rem;
      & .title {
        font-size: 1.3rem;
        font-weight: 600;
        padding-bottom: 1rem;
        white-space: normal;
      }
      & .info {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        font-size: .9rem;
        color: #969799;
        & .date {
          padding-left: 1.2rem;
          font-size: .8rem;
        }
      }
      & .main_content1 {
        padding-top: 1.5rem;
      }
      & img {
        display: block;
        width: 100%;
        margin: 0 auto;
        padding: 1rem 0;
      }
      & .main_content2 {
        padding-top: 1rem;
      }
    }
  }
}
</style>
