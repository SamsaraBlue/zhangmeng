<template lang="html">
  <div class="">
    <item-list :lists="officials"></item-list>
  </div>
</template>

<script>
import ItemList from '@/components/public/ItemList'
export default {
  data () {
    return {
      officials: []
    }
  },
  components: {
    ItemList
  },
  mounted () {
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/official')
    .then((response) => {
      this.officials = response.data.officials
      // console.log(this.officials)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
</style>
