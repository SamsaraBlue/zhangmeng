<template lang="html">
  <div class="container">
    <div class="content">
      <router-view></router-view>
      <tabbar v-on:switchNav="switchNum"></tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/public/tabbar'
export default {
  data () {
    return {
    }
  },
  components: {
    Tabbar
  },
  methods: {
    switchNum (value) {
      this.pageIndex = value
      console.log(this.pageIndex)
    }
  }
}
</script>

<style lang="css">
</style>
