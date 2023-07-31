import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import testForm from '@/pages/testForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testForm',
      component: testForm
    }
  ]
})
