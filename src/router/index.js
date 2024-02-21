import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsManage.vue')
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/OrderView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
