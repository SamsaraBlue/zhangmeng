<template lang="html">
  <div class="">
    <item-list :lists="strategys"></item-list>
  </div>
</template>

<script>
import ItemList from '@/components/public/ItemList'
export default {
  data () {
    return {
      strategys: []
    }
  },
  components: {
    ItemList
  },
  mounted () {
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/strategy')
    .then((response) => {
      this.strategys = response.data.strategys
      // console.log(this.strategys)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
</style>
