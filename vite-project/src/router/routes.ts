import { RouteRecordRaw } from 'vue-router';
import Test from '../views/testAlert.vue';

const routes: RouteRecordRaw[] = [
  // 其他路由配置
  {
    path: '/',
    name: 'Test',
    component: Test,
  },
];

export default routes;