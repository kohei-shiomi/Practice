// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Top',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "top" */ '@/views/Top.vue'),
      },
    ],
  },
  {
    path: '/about',
  children: [
    {
      path: '',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
  ],
    },
  {
    path: '/works_1',
  children: [
    {
      path: '',
      name: 'Works_1',
      component: () => import('@/views/Works_1.vue'),
    },
  ],
    },
  {
    path: '/works_2',
  children: [
    {
      path: '',
      name: 'Works_2',
      component: () => import('@/views/Works_2.vue'),
    },
  ],
    },
  {
    path: '/works_3',
  children: [
    {
      path: '',
      name: 'Works_3',
      component: () => import('@/views/Works_3.vue'),
    },
  ],
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

