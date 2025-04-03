import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue'),
    },
    {
      path:'/todos',
      name:'todo',
      component: () => import('../pages/TodoList.vue'),
    },
    {
      path:'/todos/add',
      name:'addTodo',
      component:() => import('../pages/AddTodo.vue')
    },
    {
      path:'/todos/edit/:id',
      name:'EditTodo',
      component:()=> import('../pages/EditTodo.vue')
    },
    {
      path:'/:paths(.*)*',
      name: 'notFound',
      component: () => import ('../pages/NotFound.vue'),
    },
  ],
});

export default router
