<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navBorder = ref(false)
const showNavbar = ref(true)
const lastScrollPosition = ref(0)
const scrollOffset = ref(40)
const hamOpen = ref(false)

defineProps({
  menu: {
    type: Array,
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
function onClick(event){
  window.location.hash = '#' + event.target.innerHTML;
  event.preventDefault();
  //gsap.to(window, {duration: 2, scrollTo: document.querySelector(event.target.innerHTML)});
  
}
function beforeEnter(el){
  el.style.opacity = 0
  el.style.transform = 'translateY(-9px)'
}
function enter(el, done){
  gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.3
      })
}
</script>
<template>
    <header @scroll="onScroll">
        <nav :class="[{ 'navHidden': !showNavbar}, {'navBorder': navBorder }]">
            <Transition name="fade-down" appear>
            <div class = 'logo'>
                <a href="/" aria-label="Home" target="_self" rel="noreferrer"><span>Chuluunbat Purev</span></a>
            </div>
            </Transition>
            <div class="links">
                <TransitionGroup tag="ul" appear
                @before-enter="beforeEnter"
                @enter="enter">
                    <li v-for="(item, index) in menu" class="item" :key="item" :data-index="index">
                        <a :href="'#' + item " @click="onClick" :data-text="item">{{ item }}</a>
                    </li>
                </TransitionGroup>
            </div>
            <div class="hamburger-links">
              <button class="ham__btn" @click="hamOpen=!hamOpen" :class="{'active':hamOpen}">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
              </button>
              <TransitionGroup tag="ul" v-if="hamOpen" class="aside"
                name ="translateX">
                    <li v-for="(item, index) in menu" class="ham_item" :key="item" :data-index="index">
                        <a :href="'#' + item " @click="onClick" :data-text="item">{{ item }}</a>
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
  z-index: 9;
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
  padding: 25px 69px;
  transform: translateY(0);
  transition: transform 200ms linear;
}
nav.navHidden {
  transform: translateY(-100%);
}
nav.navBorder {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  padding: 15px 69px;
}
.logo, .links{
  display: flex;
  align-items: center;
}
.logo a{
  border-radius: 10px;
  padding: 4px;
  background: var(--blue);
  color: white;
  text-decoration: none;
}
nav .item, footer li{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
nav .item a{
  color: white;
  text-decoration: none;
  text-transform: capitalize;
}
nav .item a:first-letter {
  text-transform: uppercase;
}
nav .item a::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;

  color: var(--blue);
  overflow: hidden;

  width: 0%;
  transition: 0.5s;
}
nav .item a:hover::before {
  width: 100%;
}
.fade-down-enter-active, .fade-down-leave-active {
  transition: all 1s ease;
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.hamburger-links{
  display:none;
}
.hamburger-links button {
  display: block;
  width: 50px;
  height: 50px;
  background: var(--background-color-primary);
  border: none;
  position: relative;
  z-index: 10;
  appearance: none;
  cursor: pointer;
  outline: none;
}
.hamburger-links span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .4s ease;
}
.top {
  transform: translateY(-8px);
}

.bottom {
  transform: translateY(8px);
}
.active .top{
  transform: rotate(-45deg);
}
.active .mid{
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}
.active .bottom {
  transform: rotate(45deg);
}

.hamburger-links ul {
  padding-top: 50px;
  list-style:none;
  padding: 0;
  margin: 0;
}

.hamburger-links ul li a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: .5em;
  display: block;
  color: white;
  transition: .4s ease;
}
.hamburger-links ul li a::hover {
  background: lightgrey;
  color: dimgrey;
}

.translateX-enter{
	transform:translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
	transform-origin: top left 0;
	transition:.2s ease;
}

.translateX-leave-to{
	transform: translateX(-200px);
	opacity: 0;
}

@media only screen and (max-width: 768px) {
  nav, nav.navBorder{
    padding: 16px;
  }
  .links {
    display:none;
  }
  .logo a span{
    display: none;
  }
  .logo a::after{
    content:'CP';
  }
  .hamburger-links{
    display:block;
  }
.aside{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;
  background-color: var(--background-color-ligther);
  box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
  z-index: 9;
  flex-direction: column;
}
}
</style>
