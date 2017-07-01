<template lang="html">
  <div class="">
    <item-list :lists="activitys"></item-list>
  </div>
</template>

<script>
import ItemList from '@/components/public/ItemList'
export default {
  data () {
    return {
      activitys: []
    }
  },
  components: {
    ItemList
  },
  mounted () {
    this.$axios.get('https://www.easy-mock.com/mock/594fa2d49adc231f3569cc5c/zhangmeng/activity')
    .then((response) => {
      this.activitys = response.data.activitys
      // console.log(this.activitys)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
</style>
