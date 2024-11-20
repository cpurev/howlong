/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Logs from './components/Logs.vue'
import Home from './components/Home.vue'

const routes = [
  {path: '/', name:'',component: Projects},
  {path: '/about', name:'about',component: Profile},
  {path: '/experience', name:'experience',component: Experience},
  {path: '/logs', name:'logs',component: Logs},
  { path: '/:pathMatch(.*)*', component: Home }, // Handle 404 Not Found
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/* import the fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faFolder, faFile, faFilePdf, faFileExcel, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faChevronDown, faLink, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faX, faFolderOpen, faFileExcel, faFilePdf, faEnvelope, faFile, faFolder, faArrowUpRightFromSquare, faChevronDown, faLink, faArrowRight);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
