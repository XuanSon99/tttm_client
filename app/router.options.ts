import type { RouterOptions } from '@nuxt/schema';

export default <RouterOptions>{
  routes: (_routes) => [
    {
      path: '/',
      component: () => import('~/pages/index.vue'),
    },
    {
      path: '/danh-muc/:id',
      component: () => import('~/pages/tin-tuc.vue'),
    },
    {
      path: '/tin-tuc',
      component: () => import('~/pages/tin-tuc.vue'),
    },
    {
      path: '/tim-kiem/:id',
      component: () => import('~/pages/tin-tuc.vue'),
    },
    {
      path: '/:id',
      component: () => import('~/pages/detail.vue'),
    },
    {
      path: '/gioi-thieu',
      component: () => import('~/pages/gioi-thieu.vue'),
    },
  ],
};