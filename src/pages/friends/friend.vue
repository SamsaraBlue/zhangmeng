<template lang="html">
  <div class="container">
    <div class="content friends">
      <div class="friends_activity items">
        <p>好友动态</p>
        <img src="" alt="">
      </div>
    </div>
    <div class="friends">
      <div class="zm_friends items list" @click="zmdetail">
        <div class="text">掌盟好友</div>
        <div class="right_icon" :class="{active: zmShow}"></div>
      </div>
      <friend-list v-show="zmShow"></friend-list>
      <div class="game_friends items list" @click="open">
        <div class="text">游戏好友</div>
        <div class="right_icon" :class="{active: isShow}"></div>
      </div>
      <div class="friends_detail" v-show="isShow">
        <div class="my_friends items list" @click="detail">
          <div class="text">我的好友</div>
          <div class="right_icon" :class="{active: detailShow}"></div>
        </div>
        <friend-list v-show="detailShow"></friend-list>
      </div>
    </div>
    <div class="full"></div>
  </div>
</template>

<script>
import friendList from '@/components/public/friendList'
export default {
  data () {
    return {
      isShow: false,
      detailShow: true,
      zmShow: false,
      isActive: ''
    }
  },
  components: {
    friendList
  },
  methods: {
    open () {
      this.isShow = !this.isShow
    },
    detail () {
      this.detailShow = !this.detailShow
      this.isActive = !this.isActive
    },
    zmdetail () {
      this.zmShow = !this.zmShow
      console.log(this.isActive)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.active {
  animation: down .1s;
  animation-fill-mode: forwards;
}
@keyframes down {
  0% {
    transform: rotateZ(43deg);
  }
  100% {
    transform: rotateZ(134deg);
  }
}
.items {
  padding-left: .5rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  position: relative;
  & .right_icon {
    position: absolute;
    right: 1rem;
    top: 1.2rem;
  }
}
.list {
  border-bottom: 1px solid #eaeaea;
}
.friends {
  background-color: #ffffff;
  margin-top: .7rem;
  height: 3rem;
  line-height: 3rem;
  height: 100%;
  & .my_friends {
    height: 2.5rem;
    line-height: 2.5rem;
  }
}
.full{
  height: 30rem;
}
</style>
