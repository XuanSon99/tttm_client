import type { RouterOptions } from '@nuxt/schema';

export default <RouterOptions>{
  routes: (_routes) => [
    {
      path: '/',
      component: () => import('~/pages/index.vue'),
    },
    {
      path: '/danh-muc/:id',
      component: () => import('~/pages/blog.vue'),
    },
    {
      path: '/tin-tuc',
      component: () => import('~/pages/blog.vue'),
    },
    {
      path: '/tim-kiem/:id',
      component: () => import('~/pages/blog.vue'),
    },
    {
      path: '/kyc/:id',
      component: () => import('~/pages/kyc.vue'),
    },
    {
      path: '/tien-dien-tu',
      component: () => import('~/pages/rate/crypto.vue'),
    },
    {
      path: '/gia-vang',
      component: () => import('~/pages/rate/gold.vue'), 
    },
    {
      path: '/chung-khoan',
      component: () => import('~/pages/rate/stock.vue'),
    },
    {
      path: '/ngoai-te',
      component: () => import('~/pages/rate/currency.vue'),
    },
    {
      path: '/:id',
      component: () => import('~/pages/detail.vue'),
    },
  ],
};