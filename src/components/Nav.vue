<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navBorder = ref(false)
const showNavbar = ref(true)
const lastScrollPosition = ref(0)
const scrollOffset = ref(40)

defineProps({
  menu: {
    type: Array,
    required: true
  },
  scrollTo: { 
    type: Function,
    required: true
  }
})

onMounted(() => {
    lastScrollPosition.value  = window.pageYOffset
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

function onScroll() {
    if (window.pageYOffset == 0) {
        navBorder.value = false
        return
    }
    if (Math.abs(window.pageYOffset - lastScrollPosition.value ) < scrollOffset.value ) {
        return
    }
    navBorder.value = true
    showNavbar.value  = window.pageYOffset < lastScrollPosition.value 
    lastScrollPosition.value  = window.pageYOffset
}
</script>
<template>
    <header @scroll="onScroll">
        <nav :class="[{ 'navHidden': !showNavbar}, {'navBorder': navBorder }]">
            <div class = 'logo'>
                <p>Chuluunbat Purev</p>
            </div>
            <div class="links">
                <TransitionGroup tag="ul" name="fade-down" appear>
                    <li v-for="item in menu" class="item" :key="item">
                        <a :href="'#' + item " @click="scrollTo('#' + item)" :data-text="item">{{ item }}</a>
                    </li>
                </TransitionGroup>
            </div>
        </nav>
    </header>
</template>
<style scoped>
header{
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
}
nav{
  position: fixed;
  background-color: rgba(var(--background-color-dec), 0.85);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: space-between;
  font-size: var(--f-large);
  width: 100%;
  padding: 15px 69px;
  transform: translateY(0);
  transition: transform 200ms linear;
}
nav.navHidden {
  transform: translateY(-100%);
}
nav.navBorder {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
.logo, .links{
  display: flex;
  align-items: center;
}
.logo p{
  border-radius: 10px;
  padding: 4px;
  background: var(--blue);
  color: white;
}
nav li, footer li{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
nav li a{
  color: white;
  text-decoration: none;
  text-transform: capitalize;
}
nav li a:first-letter {
  text-transform: uppercase;
}
nav li a::before {
  content: attr(data-text);
  position: absolute;
  top: 1%;
  left: 0;

  color: var(--blue);
  overflow: hidden;

  width: 0%;
  transition: 0.5s;
}
nav li a:hover::before {
  width: 100%;
}
.fade-down-enter-active, .fade-down-leave-active {
  transition: all 1s ease-in;
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
