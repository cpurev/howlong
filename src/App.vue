<script setup>
import ShakeButton from './components/ShakeButton.vue'

  const menu =  [
    'home',
    'profile',
    'projects',
    'contact'
  ]
</script>
<script>
export default {
  data: () => ({
    showNavbar: true,
    lastScrollPosition: 0,
    scrollOffset: 40
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollTo(e){
      this.$refs[e.target.innerHTML].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'nearest'
        });
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    enter(el, done){
      let sections = gsap.utils.toArray("section");
      gsap.to(sections, {
        ease: "none",
        marker: true,
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "top top"
        }
      });
    }
  }
}
</script>
<template>
  <header @scroll="onScroll">
    <nav :class="{ 'navHidden': !showNavbar }">
      <ul>
        <li v-for="item in menu">
          <a :href="'#' + item " @click="scrollTo">{{ item }}</a>
          <span class="line line-2"></span>
        </li>
      </ul >
    </nav>
  </header>
  <div class="left" style="display:none;">
    <ul>
      <li title="Resume">
        <a href="#" aria-label="Resume" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-file" /></a>
      </li>
      <li title="Email">
        <a href="mailto:puluunbat@gmail.com" aria-label="Email" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
      </li>
      <li title="Linkedin">
        <a href="https://www.linkedin.com/in/chuluunbat-purev-0909361bb/" aria-label="Linkedin" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
      </li>
      <li title="GitHub">
        <a href="https://github.com/cpurev" aria-label="GitHub" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-github" /></a>
      </li>
    </ul>
  </div>
  <main>
    <Transition appear
        @enter="enter">
    <div class="wrapper">
    <section class="hero">
        <div>
          <h1>Hi, my name is</h1>
        </div>
        <div>
          <h2>Chuluunbat Purev</h2>
        </div>
        <div>
          <h3> I like computers and the internet</h3>
        </div>
        <div>
          <p>I'm a software developer most versed in Front-end Web Development. Currently, I'm focused on learning new skills such as Mahcine Learning and DevOps </p>
        </div>
        <ShakeButton text="Resume"/>
      </section>
    <section ref="profile">
        <div class="profile" >
            <div class="card">
              <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
              <p>Entwickler Clemens, mit einem Pint.</p>
              <p>Man hört ihn seufzen, ziemlich hart -</p>
              <p>Sonntag ist's, die Deadline naht</p>
            </div>
        </div>
    </section>
    <section ref="projects">
      <div class="projects" >
          <div class="card">
            <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
            <p>Entwickler Clemens, mit einem Pint.</p>
            <p>Man hört ihn seufzen, ziemlich hart -</p>
            <p>Sonntag ist's, die Deadline naht</p>
          </div></div>
    </section>
    <section ref="contact">
      <div class="contact" >
          <div class="card">
            <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
            <p>Entwickler Clemens, mit einem Pint.</p>
            <p>Man hört ihn seufzen, ziemlich hart -</p>
            <p>Sonntag ist's, die Deadline naht</p>
          </div></div>
    </section>
    </div>
    </Transition>
  </main>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to  {
  opacity: 0
}
</style>