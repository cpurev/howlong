<script setup>
import ShakeButton from './components/ShakeButton.vue'

  const menu =  [
    'profile',
    'projects',
    'contact'
  ]
</script>
<script>
export default {
  methods: {
    enter(el, done){
      gsap.from('.profile', {
        x: 500,
        scrollTrigger: {
          trigger: ".profile",
          start: "top 50%", 
          toggleActions: "play none none reset",  
        }
    })
    }
  }
}
</script>
<template>
  <header>
    <nav>
      <p>Chuluunbat Purev</p>
      <ul>
        <li v-for="item in menu"><a :href="'#' + item ">{{ item }}</a></li>
      </ul >
    </nav>
  </header>
  <div class="left">
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
    <section id="profile">
      <Transition appear @enter="enter" @after-enter="afterEnter">
        <div class="profile" >
            <div class="card">
              <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
              <p>Entwickler Clemens, mit einem Pint.</p>
              <p>Man hört ihn seufzen, ziemlich hart -</p>
              <p>Sonntag ist's, die Deadline naht</p>
            </div>
        </div>
      </Transition>
    </section>
    <section id="projects">
      <div class="projects" >
          <div class="card">
            <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
            <p>Entwickler Clemens, mit einem Pint.</p>
            <p>Man hört ihn seufzen, ziemlich hart -</p>
            <p>Sonntag ist's, die Deadline naht</p>
          </div></div>
    </section>
    <section id="contact">
      <div class="contact" >
          <div class="card">
            <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
            <p>Entwickler Clemens, mit einem Pint.</p>
            <p>Man hört ihn seufzen, ziemlich hart -</p>
            <p>Sonntag ist's, die Deadline naht</p>
          </div></div>
    </section>
    </div>
  </main>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transform: translateX(30px);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>