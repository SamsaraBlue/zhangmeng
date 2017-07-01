<template lang="html">
  <div class="container">
    <ul>
      <li v-for="item in friends">
        <img :src="item.avatar" alt="" />
        <div class="middle">
          <div class="title">{{item.name}}</div>
          <div class="id">
            <img src="../../assets/img/myfriend.png" alt="">
            <div class="id_friend">{{item.id}}</div>
          </div>
        </div>
        <div class="right">
          <div class="talk">聊天</div>
          <div class="state">
            <div class="point"></div>
            <div class="state_text">游戏离线</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      friends: []
    }
  },
  mounted () {
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/friends')
    .then((response) => {
      this.friends = response.data.friend
      console.log(this.friends)
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
  & ul {
    & li {
      height: 5rem;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      border-bottom: 1px solid #eaeaea;
      & img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        padding: .7rem;
      }
      & .middle {
        flex: 1;
        & .title {
          height: 2rem;
          padding-top: .5rem;
          padding-left: .5rem;
          line-height: 2rem;
          font-size: 1rem;
        }
        & .id {
          height: 2rem;
          line-height: 2rem;
          font-size: .8rem;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          & img {
            padding: .4rem .3rem .3rem .3rem;
            width: 1.2rem;
            height: 1.2rem;
          }
          & .id_friend {
            flex: 1;
          }
        }
      }
      & .right {
        width: 5rem;
        padding-top: .5rem;
        & .talk {
          border: 1px solid #d0ad77;
          text-align: center;
          width: 4.2rem;
          height: 2rem;
          line-height: 2rem;
          border-radius: 3px;
          color: #d0ad77;
        }
        & .state {
          font-size: .8rem;
          margin: 0 auto;
          height: 2rem;
          line-height: 2rem;
          & .point {
            display: inline-block;
            width: .5rem;
            height: .5rem;
            background-color: #b7adab;
            border-radius: 50%;
          }
          & .state_text {
            display: inline-block;
            height: 2rem;
            color: #b7adab;
            padding: 0 .4rem 0 .1rem;
          }
        }
      }
    }
  }
}
</style>
