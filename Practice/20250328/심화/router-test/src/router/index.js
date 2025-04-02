import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import Members from '@/pages/Members.vue';
import NotFound from '@/pages/NotFound.vue';
import Videos from '@/pages/Videos.vue';
import { createRouter, createWebHistory } from 'vue-router';

const memberIdGuard = (to, from) => {
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: memberIdGuard,
    },
    {
      path: '/videos',
      component: Videos,
    },
    {
      path: '/:paths(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
