import { RouteRecordRaw } from 'vue-router';
import Test from '../views/testAlert.vue';
import TestDialog from '../views/testDialog.vue';
import TesInputfrom '../views/testInput.vue';

const routes: RouteRecordRaw[] = [
  // 其他路由配置
  {
    path: '/',
    name: 'TestDialog',
    component: TesInputfrom,
  },
];

export default routes;