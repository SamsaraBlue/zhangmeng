<template lang="html">
  <div class="container">
    <my-info></my-info>
    <div class="content" :class="{visible: isvisible}">
      <v-header v-on:move="listenToMove"></v-header>
      <div class="header">
        <div class="search_icon">
          <img src="../../assets/img/QR.png" alt="" />
        </div>
        <p class="title">发现</p>
        <div class="teams">
          <ul>
            <li>
              <div class="logo">
                <img src="http://shp.qpic.cn/lolwebvideo/201501/d9f31596f949de923e424e6bfb3b7cbc/0" alt="">
              </div>
              <p>EDG</p>
            </li>
            <li>
              <div class="logo">
                <img src="http://shp.qpic.cn/lolwebvideo/201501/cbbc42025ec22cc6baa968218d9d705e/0" alt="">
              </div>
              <p>WE</p>
            </li>
            <li>
              <div class="logo">
                <img src="http://shp.qpic.cn/lolwebvideo/201501/21d8ee09dfea68008ec1e405c7b3804a/0" alt="">
              </div>
              <p>Snake</p>
            </li>
            <li>
              <div class="logo">
                <img src="http://shp.qpic.cn/lolwebvideo/201501/bc5ae94d9f344edec6329cc9b7645005/0" alt="">
              </div>
              <p>IG</p>
            </li>
          </ul>
        </div>
        <div class="fans_club">粉丝俱乐部<span></span></div>
      </div>
      <div class="community">
        <div class="community_top">
          <ul>
            <li>
              <img src="../../assets/img/icon_2.png" alt="">
              <p>英雄资料</p>
            </li>
            <li>
              <img src="../../assets/img/icon_3.png" alt="">
              <p>召唤师查询</p>
            </li>
            <li>
              <img src="../../assets/img/icon_4.png" alt="">
              <p>附近玩家</p>
            </li>
          </ul>
        </div>
        <div class="community_bottom">
          <ul>
            <li>
              <img src="../../assets/img/icon_5.png" alt="">
              <p>英雄联盟宇宙</p>
            </li>
            <li>
              <img src="../../assets/img/icon_8.png" alt="">
              <p>附近特权网吧</p>
            </li>
            <li>
              <img src="../../assets/img/icon_7.png" alt="">
              <p>游戏资料</p>
            </li>
            <li>
              <img src="../../assets/img/icon_9.png" alt="">
              <p>社区</p>
            </li>
            <li>
              <img src="../../assets/img/icon_9.png" alt="">
              <p>英雄时刻</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/public/header'
import MyInfo from '@/components/header/myinfo'
export default {
  data () {
    return {
      isvisible: ''
    }
  },
  components: {
    VHeader,
    MyInfo
  },
  methods: {
    listenToMove (isvisible) {
      this.isvisible = isvisible
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  & .content {
    background-color: #f1f1f1;
    height: 50rem;
  }
  & .header {
    height: 15rem;
    color: #d0ad77;
    background: url('../../assets/img/bg.png');
    background-size: cover;
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
    & .title {
      height: 4rem;
      font-size: 1.255555rem;
      text-align: center;
      line-height: 4.5rem;
    }
    & .teams {
      & ul {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin-top: .7rem;
        & li {
          width: 6rem;
          height: 6rem;
          text-align: center;
          & .logo {
            width: 3.5rem;
            height: 3.5rem;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 auto;
            & img {
              width: 2.3rem;
              height: 2.3rem;
              margin: 0 auto;
              margin-top: .6rem;
              background-size: cover;
              border-radius: 50%;
            }
          }
          & p {
            color: #ffffff;
            margin-top: .8rem;
            font-weight: normal;
          }
        }
      }
    }
    & .fans_club {
      margin: 0 auto;
      margin-top: 1rem;
      width: 7rem;
      height: 1.8rem;
      text-align: center;
      line-height: 1.8rem;
      border: 1px solid #d0ad77;
      & span {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        border-right: 2px solid #d0ad77;
        border-top: 2px solid #d0ad77;
        transform: rotateZ(43deg);
        margin-left: .3rem;
        margin-bottom: .1rem;
      }
    }
  }
  & .community {
    width: 100%;
    /*height: 7rem;*/
    background-color: #f6fffd;
    & .community_top {
      & ul {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
        & li {
          width: 33%;
          margin: .8rem 0;
          & img {
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      }
    }
    & .community_bottom {
      & ul {
        & li {
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          width: 100%;
          height: 3.2rem;
          line-height: 3.2rem;
          border-bottom: 1px solid #eaeaea;
          & img {
            margin-left: .5rem;
            width: 2.4rem;
            height: 3.2rem;
          }
          & p {
            margin-left: .5rem;
          }
        }
      }
    }
  }
}
</style>
