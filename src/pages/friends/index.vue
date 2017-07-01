<template lang="html">
  <div class="container">
    <my-info></my-info>
    <div class="content" :class="{visible: isvisible}">
      <v-header v-on:move="listenToMove"></v-header>
      <div class="header">
        <div class="search_icon">
          <img src="../../assets/img/add.png" alt="" />
        </div>
        <router-link class="friend_nav nav_left" :class="{active: isSelected == 1}" @click.native="selected(1)" to="/friend">好友</router-link>
        <router-link class="friend_nav nav_right" :class="{active: isSelected == 2}" @click.native="selected(2)" to="/message">消息</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/public/header'
import MyInfo from '@/components/header/myinfo'
export default {
  data () {
    return {
      isvisible: '',
      isSelected: 1
    }
  },
  components: {
    VHeader,
    MyInfo
  },
  methods: {
    listenToMove (isvisible) {
      this.isvisible = isvisible
    },
    selected (n) {
      this.isSelected = n
      // console.log(this.isSelected)
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
  height: 50rem;
}
.content {
  background-color: #f1f1f1;
}
.header {
  height: 4rem;
  background: url('../../assets/img/bg.png');
  background-size: cover;
  color: #d0ad77;
  font-size: 1rem;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  & .active {
    color: #ffffff;
  }
  & .search_icon {
  	position: fixed;
  	right: 1rem;
  	z-index: 999;
  	opacity: .8;
  	& img {
  		margin-top: 1.4rem;
  		margin-left: .9rem;
  		width: 1.6rem;
  		height: 1.6rem;
  		border-radius: 50%;
  	}
  }
  & .friend_nav {
    line-height: 5rem;
  }
  & .nav_left {
    text-align: right;
    margin-right: 3rem;
  }
}
</style>
