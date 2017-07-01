import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/index'),
      redirect: '/info/new',
      children: [{
        path: '/info',
        name: '资讯',
        component: require('@/pages/info/index'),
        children: [
          {
            path: '/info/new',
            name: '最新',
            component: require('@/components/navbar/new')
          },
          {
            path: '/special',
            name: '专栏',
            component: require('@/components/navbar/special')
          },
          {
            path: '/official',
            name: '官方',
            component: require('@/components/navbar/official')
          },
          {
            path: '/activity',
            name: '活动',
            component: require('@/components/navbar/activity')
          },
          {
            path: '/strategy',
            name: '攻略',
            component: require('@/components/navbar/strategy')
          }]
      },
      {
        path: '/friends',
        component: require('@/pages/friends/index'),
        name: 'friends',
        redirect: '/friend',
        children: [{
          path: '/message',
          component: require('@/pages/friends/message')
        },
        {
          path: '/friend',
          component: require('@/pages/friends/friend')
        }]
      },
      {
        path: '/discover',
        component: require('@/pages/discover/index'),
        name: 'discover'
      },
      {
        path: '/my',
        component: require('@/pages/my/index'),
        name: 'my',
        redirect: '/military',
        children: [
          {
            path: '/military',
            component: require('@/pages/my/military')
          },
          {
            path: '/ability',
            component: require('@/pages/my/ability')
          },
          {
            path: '/assets',
            component: require('@/pages/my/assets')
          }]
      }]
    },
    {
      path: '/info/new/search',
      name: '搜索',
      component: require('@/pages/info/search')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: require('@/components/public/detail')
    },
    {
      path: '/specialDetail/:id',
      name: 'specialDetail',
      component: require('@/components/public/specialDetail')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let routerNum = 0
//   if (localStorage.getItem('routerNum')) {
//     routerNum = localStorage.getItem('routerNum')
//   }
//   localStorage.setItem('routerNum', ++routerNum)
//   console.log('路由跳转第' + routerNum + '次')
//   next()
// })

export default router
