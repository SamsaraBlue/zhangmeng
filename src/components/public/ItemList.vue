<template lang="html">
  <div class="item_list">
    <ul class="list" v-for="item in lists" @click="displayDetail(item.id)">
      <li class="content">
        <img :src="item.img" alt="">
        <div class="list_content">
          <h4>{{item.title}}</h4>
          <p class="sub_title">{{item.subTitle}}</p>
          <div class="other">
            <div class="time">{{item.time}}</div>
            <div class="follow_num">{{item.followNum}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['lists'],
  methods: {
    displayDetail (id) {
      this.$router.push({name: 'detail', params: {'id': id}})
    }
  }
}
</script>

<style lang="scss" scoped>
 .item_list {
  height: 100%;
  margin-top: .65555555rem;
  & .list {
    & .content {
      height: 6rem;
      margin: .4rem .6rem;
      background-color: #fff;
      & img {
        width: 6rem;
        height: 5rem;
        float: left;
        margin-top: .5rem;
        margin-left: .5rem;
        display: inline-block;
        background-size: cover;
      }
      & .list_content {
        padding: .5rem .8rem .5rem 7rem;
        & h4 {
          font-weight: 500;
          font-size: .95555555rem;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;text-overflow: ellipsis;
        }
        & .sub_title {
          margin-top: .3rem;
          font-size: .7rem;
          color: #333333;
          height: 2rem;
          display: block;
          white-space: pre-line;
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
    }
  }
}

</style>
