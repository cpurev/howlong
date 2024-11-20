<script setup>
import { onMounted, shallowRef, ref, computed } from 'vue'

import Nav from './components/Nav.vue'

const beforeEnter = (el) => {
      console.log('before enter');
      el.style.transform = 'translateX(-50px)';
      el.style.opacity = 0;
    };

    const enter = (el) => {
      console.log('enter');

      gsap.to(el, {
        duration: 1,
        opacity: 1,
        translateX: '0vh',
        ease: 'power1.inOut',
      });
    };

    const beforeLeave = (el) => {
      console.log('before leave');
      el.style.transform = 'translateX(0vh)';
    };
const leave = (el, done) => {
  console.log('leave');

  gsap.to(el, {
    duration: 1,
    opacity: 1,
    translateX: '50px',
    ease: 'power1.inOut',
    onComplete: done,
  });
};
</script>

<template>  
<header>
  <div class="header-wrapper">
    <a href="#/">
      <h1>Chuluunbat Purev  </h1> 
    </a>
      <h1>Software Developer  </h1> 
    <p></p>
    <p></p>
    <p></p>
  </div>
</header>
  <main>
    <div class="wrapper" >
      <Nav />
      <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
        <RouterView />
      </transition>
    </div>
  </main>
  <footer>
    <div class="footer-contents">
      <div>
        <p>Built by Chuluunbat Purev©2024</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
main{
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  max-height: 100%;
}
a{
  text-decoration: none;
  color: black;
}
.header-wrapper{
  display: flex;
  justify-content: space-around;
}
.header-wrapper h1{
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
}
.wrapper{
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}

footer p{
  font-size: 16.5px;
  line-height: 1;
}
</style>