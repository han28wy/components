import { RouteRecordRaw } from 'vue-router';
import Test from '../views/testAlert.vue';
import TestDialog from '../views/testDialog.vue';
import TestInput from '../views/testInput.vue';

const routes: RouteRecordRaw[] = [
  // 其他路由配置
  {
    path: '/',
    name: 'TestInput',
    component: TestInput,
  },
];

export default routes;