<template lang="html">
  <div class="message_list">
    <mt-cell-swipe v-for="item in messages" :key="item" class="list_item" :right="[{
      content: '删除',
      style: { background: '#ff3b2f', color: '#fff', width: '4rem',textAlign:'center', lineHeight:'5.3rem',fontSize:'1.3rem'},
      handler: () => this.$messagebox('delete')}]">
      <img :src="item.avatar" alt="" />
      <div class="middle">
        <h3>{{item.id}}</h3>
        <p>{{item.recentMessage}}</p>
      </div>
      <div class="right">
        <div class="date">{{item.date}}</div>
      </div>
    </mt-cell-swipe>
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
    messages: 'allMessages'
  }),
  created () {
    this.$store.dispatch('getMessagesBaseApi')
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/reset.css';
.message_list {
  height: 100rem;
  background-color: #fff;
  & .list_item {
    height: 5.3rem;
    border-bottom: 1px solid #eaeaea;
    position: relative;
    & img {
      width: 3.5rem;
      height: 3.5rem;
      margin-top: .85rem;
      padding: 0 .2rem;
      border-radius: 50%;
    }
    & .middle {
      display: inline-block;
      padding: .6rem 0 0 .5rem;
      & h3 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #333333;
      }
      & p {
        font-size: .85rem;
        margin-top: 1rem;
      }
    }
    & .right {
      position: absolute;
      right: .7rem;
      top: 1.1rem;
    }
  }
}
</style>
