import {createRouter, createWebHashHistory} from 'vue-router'
import Contacts from '@/views/Contacts.vue'
import MainContent from '@/views/MainContent.vue'
import PortfolioProjects from '@/views/PortfolioProjects'
import MyOffer from '@/views/MyOffer.vue'
import MyHobbies from '@/views/MyHobbies.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/contacts', component: Contacts},
    {path: '/main', component: MainContent, alias: '/'},
    {path: '/portfolio', component: PortfolioProjects},
    {path: '/offer', component: MyOffer},
    {path: '/hobbies', component: MyHobbies},
  ],
})

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../views/MainContent.vue'),
//   },
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

// export default router
