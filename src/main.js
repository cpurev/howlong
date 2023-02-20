/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

/* import the fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faFile, faGithub, faLinkedinIn)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
