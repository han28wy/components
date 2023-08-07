import { RouteRecordRaw } from 'vue-router';
import Test from '../views/testAlert.vue';
import TestDialog from '../views/testDialog.vue';
import TestInput from '../views/testInput.vue';
import TestForm from '../views/testForm.vue';
import TestCheckbox from '../views/testCheckbox.vue';

const routes: RouteRecordRaw[] = [
  // 其他路由配置
  {
    path: '/',
    name: 'TestCheckbox',
    component: TestCheckbox,
  },
];

export default routes;