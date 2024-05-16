/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/* import the fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faFolder, faFile, faFilePdf, faFileExcel, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faChevronDown, faLink, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faX, faFolderOpen, faFileExcel, faFilePdf, faEnvelope, faFile, faFolder, faArrowUpRightFromSquare, faChevronDown, faLink, faArrowRight);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
