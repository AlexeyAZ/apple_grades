import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Grades from '@/components/Grades'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: Main
    },
    {
      path: '/grades',
      name: 'grades',
      component: Grades
    }
  ]
})
