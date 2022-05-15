import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '@/components/layout/MainLayout.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    component: () => import('@/views/other/homePage.vue'),
  },
];
const mainRouter: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: '测试主页',
    component: MainLayout,
    redirect: '/main/home',
    children: [
      {
        path: '/main/home',
        name: '主页',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/home2',
        name: '主页2',
        redirect: 'home2/home3',
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: [...routes, ...mainRouter], // `routes: routes` 的缩写
});
export { mainRouter };
export default router;
