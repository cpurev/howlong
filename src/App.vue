<script setup>
import { onMounted, nextTick } from 'vue'

import ShakeButton from './components/ShakeButton.vue'
import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'

const sections = gsap.utils.toArray("section");

function scrollToHash(hash) {

    
}
 
onMounted(async () => {
  await nextTick();
  document.documentElement.scrollTop = 0;
  if(location.hash) scrollToHash(window.location.hash);

  gsap.fromTo(".contact", { opacity: 0}, {
      ease:'power1.inOut',
      opacity: 1,
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
      start: "100px 90%",
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
      start: "100px 90%",
      end: "center center",
      scrub: true
    }
  });
})
</script>

<template>  
  <Nav :menu="['about', 'projects', 'contact']" :scrollTo="scrollToHash"/>
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
        <ShakeButton text="Resume" link="/"/>
    </Transition>
      </section>
    <section id="about">
        <div class="profile" >
            <h2>{ About Me }</h2>
            <div class="inner-profile">
            <div class="about-me">
              <p>Hello! My name is Chuluunbat and I enjoy writing code. 
                Growing up, computers were an integral part of my life. From playing video games all day to working at my dad's internet cafe.
                 I eventually got a lot of passion for Computers and was fascinated by things that could be done(and have been done)</p>
              <p>Fast-forward to today, and I'm almost finished getting my CS degree. 
                Throughout my time in university, I had the opportunity to work on and explored various areas of Computer Science
              </p>
              <p>Outside work, I enjoy playing competitive video games, working out and listening to music. </p>
              <p>Areas in CS I worked in or would love to learn more about:</p>
            <ul class="interests">
              <li>Cloud Computing</li>
              <li>.NET development</li>
              <li>Mobile App development</li>
              <li>Cybersecurity</li>
              <li>Machine Learning</li>
              <li>DevOps</li>
              <li>Full stack Web Development</li>
              <li>Graphics</li>
            </ul>
            </div>
            <div class="about-pic">
              <div class="img-wrapper">
                <img width="300" height="300" decoding="async" src="./assets/images/placeholder.jpg" alt="Headshot">
              </div>
            </div>
          </div>
        </div>
    </section>
    <section id="projects">
      <div class="projects" >
          <h2>{ Things I Have Worked on }</h2>
          <div class="card">
            <p> Some noteworthy deployed(or plan to deploy) projects</p>
            <Projects />
          </div>
        </div>
    </section>
    <section id="contact">
      <div class="contact" >
            <h2>{ Get In Touch }</h2>
            <p>As a recent graduate, I am eager to take the next step in my career and continue learning.  Currently, I'm open to any developer position in any city in USA. 
              Please feel free to contact me if you have an opportuniy that you believe would be a good fit for me. I am always excited to explore new challenges and technologies.
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
        <p>© 2023, Chuluunbat Purev</p>
      </div>
  </footer>
</template>
<style>
.fade-up-enter-active, .fade-up-leave-active {
  transition: all 1s ease-in;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>