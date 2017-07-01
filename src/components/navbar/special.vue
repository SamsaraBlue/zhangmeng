<template lang="html">
  <div class="container">
    <div class="follow">
      <div class="follow_title">已订阅</div>
      <div class="item_list">
        <ul>
          <li v-for="(item, index) in subscribedArr" v-on:click="toDetail(item.id)">
            <img :src="item.img" alt="">
            <div class="list_content">
              <h4>{{item.title}}</h4>
              <p class="sub_title">{{item.subTitle}}</p>
            </div>
            <div class="right_icon"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="unfollow">
      <div class="unfollow_title">未订阅</div>
      <div class="item_list">
        <ul v-for="(item, index) in specialsArr">
          <li>
            <img :src="item.img" alt="">
            <div class="list_content" v-on:click="toDetail(item.id)">
              <h4>{{item.title}}</h4>
              <div class="other">
                <div class="time">{{item.time}}</div>
                <div class="follow_num">{{item.followNum}}</div>
              </div>
              <p class="sub_title">{{item.subTitle}}</p>
            </div>
            <div class="follow_btn" :key="index" :data-index="index" v-on:click="addTunnel()"><span class="add">+</span>订阅</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: mapGetters({
    specialsArr: 'specials',
    subscribedArr: 'subscribed'
  }),
  created () {
    this.$store.dispatch('getSpecialBaseApi')
  },
  methods: {
    addTunnel () {
      // console.log(event.currentTarget.dataset.index)
      let index = event.currentTarget.dataset.index
      this.$store.dispatch('add_subscribed', index)
      this.$store.dispatch('delete_nosubscribed', index)
      // console.log(this.subscribedArr)
      // console.log(this.specialsArr)
      this.subscribedArr = this.$store.state.subscribed
      this.specialsArr = this.$store.state.specials
      let tempSubscribedArr = this.subscribedArr
      let tempSpecialsArr = this.specialsArr
      this.$store.dispatch('update_all', { tempSubscribedArr, tempSpecialsArr })
    },
    toDetail (id) {
      this.$router.push({name: 'specialDetail', params: {'id': id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  & .follow {
    & .follow_title {
      font-size: .9rem;
      color: #969799;
      padding: .5rem 0 0 .6rem;
    }
    & ul {
      & li {
        margin: .4rem .6rem;
        background-color: #fff;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        & img {
          width: 3rem;
          height: 3rem;
          float: left;
          padding: .6rem;
          display: inline-block;
          border-radius: 50%;
        }
        & .list_content {
          flex: 1;
          width: 5rem;
          & h4 {
            padding-top: .8rem;
            font-weight: 500;
            font-size: .95555555rem;
          }
          & .sub_title {
            margin-top: .2rem;
            font-size: .7rem;
            color: #333333;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        & .right_icon {
          margin-top: 1.8rem;
          margin-right: 1rem;
        }
      }
    }
  }
  & .unfollow {
    & .unfollow_title {
      font-size: .9rem;
      color: #969799;
      padding: .5rem 0 0 .6rem;
    }
    & .item_list {
      height: 100%;
      margin-top: .4rem;
      & ul {
        & li {
          margin: .4rem .6rem;
          background-color: #fff;
          position: relative;
          & img {
            width: 3rem;
            height: 3rem;
            float: left;
            margin-top: .7rem;
            margin-left: .6rem;
            display: inline-block;
            border-radius: 50%;
          }
          & .list_content {
            padding: .5rem .8rem .5rem 4.2rem;
            & h4 {
              font-weight: 500;
              font-size: .95555555rem;
            }
            & .sub_title {
              margin-top: .5rem;
              font-size: .7rem;
              color: #333333;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            & .other {
              margin-top: .3rem;
              font-size: .5rem;
              & .time {
                color: #333333;
                display: inline-block;
              }
              & .follow_num {
                margin-left: .5rem;
                display: inline-block;
                color: #d0ad77;
              }
            }
          }
          & .follow_btn {
            width: 3.6rem;
            height: 1.5rem;
            display: inline-block;
            position: absolute;
            right: .7rem;
            top: 1.1rem;
            border: 1px solid #d0ad77;
            font-size: .85rem;
            line-height: 1.5rem;
            color: #d0ad77;
            border-radius: 3px;
            & .add {
              padding: 0 .35rem;
            }
          }
        }
      }
    }
  }
}
</style>
