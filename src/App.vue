<script setup>
import { onMounted, nextTick } from 'vue'

import ShakeButton from './components/ShakeButton.vue'
import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'

onMounted(async () => {
  await nextTick();
  document.documentElement.scrollTop = 0;
  if(location.hash)  gsap.to(window, {duration: 2, scrollTo: document.querySelector(location.hash)})

  gsap.fromTo(".contact", { opacity: 0}, {
      ease:'power1.inOut',
      opacity: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".contact",
        start: "100px 90%",
        end: "160px center",
        scrub: true
      }
    });

  gsap.fromTo(".projects li", { opacity: 0, y:100}, {
    ease:'power1.inOut',
    opacity: 1,
    y: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".projects",
      start: "100px 90%",
      end: "center center",
      scrub: true
    }
  });

  gsap.fromTo(".about-me", {opacity: 0, x:-60},{
    ease:'power1.inOut',
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".profile",
      start: "150px 90%",
      end: "center center",
      scrub: true
    }
  });
  
  gsap.fromTo(".about-pic", {opacity: 0, x:60},{
    ease:'power1.inOut',
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".profile",
      start: "150px 90%",
      end: "center center",
      scrub: true
    }
  });
})
</script>

<template>  
  <Nav :menu="['about', 'projects', 'contact']"/>
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
          <h2>Chuluunbat Purev.</h2>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <div>
          <h3>You know, computers are magic!</h3>
        </div>
    </Transition>
    <Transition appear
      name="fade-up">
        <div>
          <p>I'm a software developer most versed in Full-stack Web Development. </p>
        </div>
    </Transition>
      </section>
    <section id="about">
        <div class="profile" >
            <h2>{ About Me }</h2>
            <div class="inner-profile">
            <div class="about-me">
              <p>Hello! My name is Chuluunbat and I'm from Mongolia. 
                Growing up, computers were an integral part of my life. From playing video games all day to working at my dad's <a href="https://en.wikipedia.org/wiki/PC_bang" aria-label="Wikipedia link" target="_blank" rel="noreferrer">internet cafe</a>.
                 I eventually got a lot of passion for computers and was fascinated by the endless possibilities they offered.</p>
              <p>Fast-forward to today, and I obtained my Bachelor of Science in Computer Science degree, where I gained expertise in various fields of Computer Science.
                Throughout my time in university, 
                I enjoyed working with people, coding, and developing software that is widely used. I aspire to continue this pursuit for the rest of my life.
              </p>
              <p>Outside of work and school, I enjoy playing competitive video games, working out and listening to music. </p>
              <p>These are fields in IT that I have some experience in:</p>
            <ul class="interests">
              <li>Cloud Computing</li>
              <li>.NET development</li>
              <li>DevOps</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>System Engineer</li>
            </ul>
            </div>
            <div class="about-pic">
              <div class="img-wrapper">
                <img width="300" height="300" decoding="async" src="./assets/images/headshot_1.jpg" alt="Headshot">
              </div>
            </div>
          </div>
        </div>
    </section>
    <section id="projects">
      <div class="projects" >
          <h2>{ Things I Have Worked on }</h2>
          <div class="card">
            <p> Some noteworthy projects</p>
            <Projects />
          </div>
        </div>
    </section>
    <section id="contact">
      <div class="contact" >
            <h2>{ Get In Touch }</h2>
            <p>Feel free to contact me via email or linkedin if you have an opportuniy that you believe would be a good fit for me.
              I am always excited to explore new challenges and technologies.
            </p>
            <div class='email-link'>
            <ShakeButton text="puluunbat@gmail.com" link="mailto:puluunbat@gmail.com"/>
            </div>
        </div>
    </section>
    </div>
  </main>
  <footer>
    <div class="contact-links">
      <ul>
          <li title="Resume">
            <a href="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA/view?usp=sharing" aria-label="Resume" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-file" /></a>
          </li>
          <li title="Email">
            <a href="mailto:puluunbat@gmail.com" aria-label="Email" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
          </li>
          <li title="Linkedin">
            <a href="https://www.linkedin.com/in/chuluunbat-purev/" aria-label="Linkedin" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
          </li>
          <li title="GitHub">
            <a href="https://github.com/cpurev" aria-label="GitHub" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-github" /></a>
          </li>
        </ul>
      </div>
      <div>
        <p>© 2023, Built by Chuluunbat Purev, Inspiration from   <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a></p>
      </div>
  </footer>
</template>
<style>
.fade-up-leave-from, .fade-up-enter-to {
  transition: all 1s ease-in;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>