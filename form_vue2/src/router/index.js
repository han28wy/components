import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import testForm from '../../pages/testForm'
import testInput from '../pages/testInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testInput',
      component: testInput
    }
  ]
})
