<script setup>
import ShakeButton from './components/ShakeButton.vue'
import Projects from './components/Projects.vue'
  const menu =  [
    'about',
    'projects',
    'contact'
  ]
</script>
<script>
export default {
  data: () => ({
    navBorder: false,
    showNavbar: true,
    lastScrollPosition: 0,
    scrollOffset: 40
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    this.scrollAnimation();
    if (location.hash) {
      this.$refs[location.hash.substring(1)].scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'nearest'
        });}
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
      if (window.pageYOffset == 0) {
        this.navBorder = false
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.navBorder = true
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset


    },
    scrollAnimation(){
      
    }
  }
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
            <a :href="'#' + item " @click="scrollTo" :data-text="item">{{ item }}</a>
          </li>
        </TransitionGroup>
    </div>
    </nav>
  </header>
  <main>
    <div class="wrapper">
    <section class="hero">
    <Transition appear
      name="fade-up">
        <div>
          <h1>Hi, my name is</h1>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <div>
          <h2>Chuluunbat Purev</h2>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <div>
          <h3> I like computers and the internet</h3>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <div>
          <p>I'm a software developer most versed in Front-end Web Development. Currently, I'm focused on learning new skills such as Mahcine Learning and DevOps </p>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <ShakeButton text="Resume"/>
    </Transition>
      </section>
    <section ref="profile">
        <div class="profile" >
            <h2>{ About Me }</h2>
            <div class="card">
              <p>👋 Hey there! I'm Chuluunbat, or Chuka, and I'm an aspiring software engineer. 
                Growing up in Mongolia my father owned an Internet Cafe (a relic of its time, nowadays only gaming ones exist) where it was just me and him working there. 
                We did everything that has to do with computers from running the place to, formating computers, building PCs, troubleshooting, and selling PC parts.</p>
              <p>It was natural for me to pursue a degree in Computer Science and choose a career in IT industry. During my time at university, I had opportunity to work and explore specific areas of Computer Science.
                I have learned and have experience in working on Machine Learning, Cryptography, and DevOps.
              </p>
              <p>I will be graduating from my university in April, 2023. So </p>
              <p>Here are some things that I spend my time on:</p>
            </div>
        </div>
    </section>
    <section ref="projects">
      <div class="projects" >
          <h2>{ Things I Have Worked on }</h2>
          <div class="card">
            <p> Noteworthy projects.</p>
            <Projects />
          </div>
        </div>
    </section>
    <section ref="contact" style="background-color: blue;">
      <div class="contact" >
          <div class="card">
            <h2>{ Get In Touch }</h2>
            <p>As a recent graduate, I am eager to take the next step in my career and continue learning.  Currently, I'm open to any position in any city in America. 
              Please feel free to contact me if you have an opportuniy that you believe would be a good fit for me. I am always excited to explore new challenges and technologies.
            </p>
          </div>
        </div>
    </section>
    </div>
  </main>
  <footer>
    <div>
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
      <div>
        <p>This site's purpose is to raise awarness of Chuluunbat Purev, if you are aware of the guy. 
          Thank you. If not I'd recommend reloading the page so you can see all the small animations he made sitting in his dark room on a tuesday night.
        </p>
      </div>
  </footer>
</template>
<style>
.fade-up-enter-active, .fade-up-leave-active,
.fade-down-enter-active, .fade-down-leave-active {
  transition: all 1s ease-in;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>