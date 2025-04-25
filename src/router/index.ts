import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageView from '@/views/MessageView.vue'
import { createQuestionPage } from './getQuestionPage'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:token',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:token/messages',
      name: 'messagePage',
      component: MessageView,
    },
    ...createQuestionPage(),
  ],
})

export default router
