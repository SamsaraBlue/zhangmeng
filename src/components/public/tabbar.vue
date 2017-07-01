<template lang="html">
  <div class="tabbar">
    <router-link to="/" class="tabbar__item" id="tabbar__item1" @click.native="setIndex(1)">
      <img v-if="selected != 1" src="../../assets/img/info.png" alt="">
      <img v-if="selected === 1" src="../../assets/img/info_active.png" alt="">
      <p v-if="selected != 1" class="icon">资讯</p>
      <p v-if="selected === 1" class="icon__active">资讯</p>
    </router-link>
    <router-link to="/friends" class="tabbar__item" id="tabbar__item2" @click.native="setIndex(2)">
      <img v-if="selected != 2" src="../../assets/img/friends.png" alt="">
      <img v-if="selected === 2" src="../../assets/img/friends_active.png" alt="">
      <p v-if="selected != 2" class="icon">好友</p>
      <p v-if="selected === 2" class="icon__active">好友</p>
    </router-link>
    <router-link to="/discover" class="tabbar__item" id="tabbar__item3" @click.native="setIndex(3)">
      <img v-if="selected != 3" src="../../assets/img/discover.png" alt="">
      <img v-if="selected === 3" src="../../assets/img/discover_active.png" alt="">
      <p v-if="selected != 3" class="icon">发现</p>
      <p v-if="selected === 3" class="icon__active">发现</p>
    </router-link>
    <router-link to="/my" class="tabbar__item" id="tabbar__item5" @click.native="setIndex(5)">
      <img v-if="selected != 5" src="../../assets/img/my.png" alt="">
      <img v-if="selected === 5" src="../../assets/img/my_active.png" alt="">
      <p v-if="selected != 5" class="icon">我的</p>
      <p v-if="selected === 5" class="icon__active">我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    setIndex (n) {
      this.selected = n
    }
  },
  watch: {
    selected (value) {
      this.$emit('switchNam', value)
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
.tabbar{
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  border-top: 1px solid #b0b1b3;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
.tabbar__item{
  margin-top: 10px;
  text-align: center;
  & img{
    width: 30px;
    height: 24px;
    margin: 0 auto;
  }
  & p{
    font-size: 13px;
    margin: 0 auto;
    margin-top: 3px;
    text-align: center;
  }
}
.icon{
  color: #686868;
}
.icon__active{
  color: #b89c53;
}
.router-link-active{
  color: #b89c53;
}
</style>
