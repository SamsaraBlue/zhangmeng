<template lang="html">
  <div class="container">
    <div class="guide_list">
      <ul>
        <li class="item_left">
          <a href="">
            <div class="guide_content">
              <div class="guide_title">视频</div>
              <div class="sub_title">神探苍流言终结者</div>
            </div>
            <img src="../../assets/img/picture7.png" alt="">
          </a>
        </li>
        <li class="item_right">
          <a href="">
            <div class="guide_content">
              <div class="guide_title">赛事</div>
              <div class="sub_title">2017LPL夏季赛</div>
            </div>
            <img src="../../assets/img/picture6.png" alt="">
          </a>
        </li>
      </ul>
    </div>
    <item-list :lists="news"></item-list>
  </div>
</template>

<script>
import ItemList from '@/components/public/ItemList'
export default {
  data () {
    return {
      news: []
    }
  },
  components: {
    ItemList
  },
  mounted () {
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/new')
    .then((response) => {
      this.news = response.data.news
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
  height: 50rem;
  width: 100%;
  & .guide_list {
    & ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      height: 2.8rem;
      margin: .5rem .6rem;
      background-color: #fff;
      & li {
        width: 50%;
        padding-left: 1rem;
        color: #fff;
        position: relative;
        & a {
          color: inherit;
        	width: 100%;
        	-webkit-tap-highlight-color:rgba(255,255,255,0);
        }
        & .guide_title {
          font-size: .9555555555rem;
          margin-top: .2rem;
        }
        & .guide_content {
          font-size: .7rem;
          margin-top: .2rem;
          display: inline-block;
        }
        & img {
          position: absolute;
          display: inline-block;
          width: 2.8rem;
          height: 2.8rem;
          right: 0rem;
        }
      }
      & .item_left {
        margin-right: .2rem;
        background-color: #01bfcb;
      }
      & .item_right {
        margin-left: .2rem;
        background-color: #80c23c;
      }
    }
  }
}
</style>
