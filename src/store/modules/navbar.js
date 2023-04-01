import {createRouter, createWebHashHistory} from 'vue-router'

import ContactMe from '@/views/ContactMe'
import MainContent from '@/views/MainContent'
import PortfolioProjects from '@/views/PortfolioProjects'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: MainContent,
  },
  {
    path: '/contacts',
    name: 'contacts',
    conponent: ContactMe,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    conponent: PortfolioProjects,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
