<template lang="html">
  <div class="container">
    <my-info></my-info>
    <div class="content" :class="{visible: isvisible}">
    <v-header v-on:move="listenToMove"></v-header>
      <div class="header">
        <div class="search_icon">
          <img src="../../assets/img/share.png" alt="" />
        </div>
        <mt-button class="title_btn" @click.native="handleClick">均衡教派</mt-button>
        <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
          <div class="popup_content">
            <div class="popup_header">
              <button class="cancle">取消</button>
              <button class="submit">确认</button>
            </div>
            <div class="popup_slot">
              <ul v-for="it in slots">
                <li>{{it.name}}</li>
              </ul>
            </div>
          </div>
        </mt-popup>
        <div class="gamer_info">
          <div class="avatar">
            <img src="http://ossweb-img.qq.com/images/lol/img/profileicon2/profileicon1385.jpg" alt="">
            <div class="level">30</div>
          </div>
          <!-- <div class="gamer_level">30</div> -->
          <div class="gamer_id">得不到的在骚动Y</div>
          <div class="state">
            <div class="point"></div>
            <div class="state_text">游戏离线</div>
            <div class="first_win">首胜可用</div>
          </div>
        </div>
      </div>
      <div class="navbar">
        <router-link class="nav_item" :class="{active: isSelected == 1}" @click.native="selected(1)" to="/military">战绩</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 2}" @click.native="selected(2)" to="/ability">能力</router-link>
        <router-link class="nav_item" :class="{active: isSelected == 3}" @click.native="selected(3)" to="/assets">资产</router-link>
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
      popupVisible: false,
      slots: [
        {
          name: '艾欧尼亚'
        },
        {
          name: '皮尔特沃夫'
        }
      ],
      isvisible: '',
      isSelected: 1
    }
  },
  components: {
    VHeader,
    MyInfo
  },
  methods: {
    handleClick () {
      this.popupVisible = true
    },
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
  -webkit-tap-highlight-color: #d0ad77;
}
.container {
  height: 100%;
  & .content {
    background-color: #f1f1f1;
  }
  & .header {
    height: 13rem;
    color: #d0ad77;
    background: url('../../assets/img/bg.png');
    background-size: cover;
    text-align: center;
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
    	}
    }
    & .title_btn {
      height: 4rem;
      line-height: 5rem;
      background-color: #0d1528;
      border: none;
      color: #d0ad77;
      font-size: 1.1rem;
      text-align: center;
    }
    & .gamer_info {
      & .avatar {
        position: relative;
        width: 5.2rem;
        height: 4.5rem;
        margin: 0 auto;
        & img {
          padding: 3px;
          background-size: cover;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          border: 2px solid #d0ad77;
        }
        & .level {
          background-color: #1f1d22;
          width: 1.2rem;
          height: 1.2rem;
          line-height: 1.2rem;
          position: absolute;
          color: #ffffff;
          font-size: .8rem;
          border: 1.2px solid #d0ad77;
          border-radius: 50%;
          right: 0;
          bottom: 0;
        }
      }
      & .gamer_id {
        margin-top: .8rem;
        color: #f1ffff;
      }
      & .state {
        font-size: .8rem;
        margin: 0 auto;
        margin-top: .4rem;
        & .point {
          display: inline-block;
          width: .5rem;
          height: .5rem;
          background-color: #b7adab;
          border-radius: 50%;
        }
        & .state_text {
          display: inline-block;
          height: .9rem;
          color: #b7adab;
          padding: 0 .4rem 0 .2rem;
          border-right: 1px solid #b7adab;
        }
        & .first_win {
          display: inline-block;
          padding-left: .1rem;
        }
      }
    }
  }
  & .navbar {
    height: 2.8rem;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
    background-color: #fbfcfe;
    color: #333333;
    & .active {
      color: #d0ad77;
    }
    & .nav_item {
      margin-top: .5rem;
      width: 33%;
      font-size: .9rem;
    }
  }
}
</style>
