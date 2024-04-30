<script setup>
import { onMounted, computed, ref } from 'vue'

import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'

const routes = {
  '/': Home,
  '/profile': Profile,
  '/experience': Experience,
  '/projects': Projects,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>  
  <Nav />
  <main>
    <div class="wrapper" >
      <component :is="currentView" />
    </div>
  </main>
  <footer>
    <div class="footer-contents">
      <div>
        <p>© 2024, Built by Chuluunbat Purev, Inspiration from   <a href="https://oklama.com/" target="_blank" rel="noreferrer">Oklama</a></p>
      </div>
    </div>
  </footer>
</template>
