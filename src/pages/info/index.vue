<template lang="html">
  <div class="container">
    <my-info></my-info>
    <div class="info-index" :class="{visible: isvisible}">
      <v-header v-on:move="listenToMove"></v-header>
      <router-link to="/info/new/search" class="search_icon">
        <img src="../../assets/img/search_icon.png" alt="" />
      </router-link>
      <div class="wrap">
        <div class="picture_slide">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="data in banner" key="data.id">
              <img :src="data.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="navbar">
        <router-link class="nav_item" :class="{active: isSelected == 1}" @click.native="selected(1)" to="/">最新</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 2}" @click.native="selected(2)" to="/special">专栏</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 3}" @click.native="selected(3)" to="/official">官方</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 4}" @click.native="selected(4)" to="/activity">活动</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 5}" @click.native="selected(5)" to="/strategy">攻略</router-link>
        <!-- <router-link class="nav_item" to="/fun">娱乐</router-link>
        <router-link class="nav_item" to="/collect">收藏</router-link> -->
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import New from '@/components/navbar/new'
import VHeader from '@/components/public/header'
import MyInfo from '@/components/header/myinfo'
export default {
  data () {
    return {
      isSelected: 1,
      banner: [
        {'id': 1, 'src': 'http://ossweb-img.qq.com/upload/adw/image/1496714012/1496714012.jpg?_r=1496743412'},
        {'id': 2, 'src': 'http://ossweb-img.qq.com/upload/adw/image/1496718570/1496718570.jpg?_r=1496743412'},
        {'id': 3, 'src': 'http://ossweb-img.qq.com/upload/adw/image/1496727632/1496727632.jpg?_r=1496743412'},
        {'id': 4, 'src': 'http://ossweb-img.qq.com/upload/adw/image/1496718634/1496718634.jpg?_r=1496743412'}
      ],
      isvisible: '',
      activeName: ''
    }
  },
  components: {
    New,
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
.info-index {
  background-color: #f1f1f1;
  height: 49rem;
  z-index: 999;
  & .search_icon {
    position: fixed;
    right: 1rem;
    z-index: 999;
    opacity: .8;
    & img {
      margin-top: 1.4rem;
      margin-left: .9rem;
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
    }
  }
}
.picture_slide {
  height: 12rem;
  & img {
    width: 100%;
    height: 100%;
    float: left;
  }
}
.navbar {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 2.6rem;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  & .nav_item {
    margin-top: .6rem;
    width: 80px;
  }
  & .active {
    color: #d0ad77;
  }
  & a {
    color: inherit;
    width: 100%;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }
}
</style>
