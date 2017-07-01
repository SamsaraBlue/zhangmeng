<template lang="html">
  <a @click="move" class="user_avatar">
    <img src="http://a4.qpic.cn/psb?/6717b0b8-72c3-423a-9ba8-fe5e6aef84e7/C8ZPkCMXRKOebFL3iMZSXOu.DHWbup8qj5lOM.GwaHw!/m/dA8AAAAAAAAAnull&bo=1AG.AgAAAAABB0k!&rf=photolist&t=5" alt="">
  </a>
</template>

<script>
export default {
  data () {
    return {
      isvisible: false
    }
  },
  methods: {
    move () {
      this.isvisible = !this.isvisible
      console.log(this.isvisible)
    }
  },
  watch: {
    isvisible (isvisible) {
      this.$emit('move', isvisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.user_avatar {
  position: fixed;
  z-index: 1;
  width: 5rem;
  height: 5rem;
  & img {
    margin-top: 1.2rem;
    margin-left: .9rem;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    padding: 2px;
    border: 2px solid #d0ad77;
  }
}
</style>
