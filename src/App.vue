<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'

const el = ref(null);
const nl = ref(null);


const observer = new IntersectionObserver((entries, observer) => {
  //console.log(entries)
});

const intro3 = "View Resume " 
function handleScroll(){
  const sections = el.value.querySelectorAll('section')
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })
  const navLi = nl.value
  navLi.forEach(function (li, ix) {
    li.classList.remove('active')
    if(li.classList.contains(`nav${current}`)){
      li.classList.add('active')
    }
  })
}

onMounted(() =>{
  observer.observe(el.value)
  nl.value = document.querySelectorAll('nav ul li')
  window.addEventListener('scroll', handleScroll);

  gsap.to("#typewriter4", {text: {value: intro3}, duration: 2, delay: 1, ease: "none"})
})
onBeforeUnmount(() =>{
  window.removeEventListener('scroll', handleScroll);
  observer.disconnect()
})

</script>

<template>  
  <Nav />
  <main>
    <div class="wrapper" ref="el" >
      <section id="0" class="about panel"  >
          <div class="nameF">
            <h1>Chuluunbat Purev</h1>
            <Transition name="fade" appear>
            <h2>Software Developer</h2>
            </Transition>
          </div>
          <div class="profile" >
            <div class="sub-header"><h2>ABOUT</h2></div>
            <p id="typewriter1">
              One of my earliest memories is playing Zuma and COD: World At War in an <a href="https://en.wikipedia.org/wiki/PC_bang" aria-label="Wikipedia link" target="_blank" rel="noreferrer">internet cafe</a>
               my dad owned when I was little. As long as I remember I was fascinated by the endless possibilities computers offered.
               I knew that I wanted to create software that is part of lots of peoples lives.
            </p>
            <p id="typewriter2">
              I'm a software developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
              Currently, I work on a wide variety of interesting and meaningful projects on a daily basis.
              I'm currently focused on learning more about Azure, GO, and Machine Learning.
              </p>
            <p id="typewriter3">
              When I'm not sitting at my desk either working or playing games, 
              I'm either rock climbing or out on some adventure.
            </p>
            <p class="arrow">
              <a target="_blank" rel="noopener noreferrer" id="typewriter4" href="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA/view?usp=sharing"></a>
              <Transition name="fade-in" appear>
                <font-awesome-icon icon="fa-solid fa-arrow-right"/> 
              </Transition>
            </p>
          </div>
      </section>
      <div id="experience" class="divider"></div>
      <section id="1" class="exp panel">
        <Transition name="fade-up" appear>
          <div class="experience" >
              <div class="sub-header"><h2>EXPERIENCE</h2></div>
              <ol>
                <li class="tile">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.fnsb.gov">
                    <header>2023 - PRESENT</header>
                    <div>
                      <h3>
                        <div class="title">
                          Software Developer
                          <span><font-awesome-icon icon="fa-solid fa-link" size="sm" /></span>
                        </div>
                        <div class="company">Fairbanks North Star Borough</div>
                      </h3>
                      <p>Deliver high-quality reliable software solutions to the borough goverment with diverse array of projects such as python script automation, full stack web development and API integration to existing systems. 
                        Provide leadership and self starter within Information Integration department through collabration, code base ownership/maintainer and knowledge shares.
                      </p>
                      <ul class="pill-list">
                        <li><div class="pill">Azure</div></li>
                        <li><div class="pill">Vue</div></li>
                        <li><div class="pill">JavaScript</div></li>
                        <li><div class="pill">TypeScript</div></li>
                        <li><div class="pill">Python</div></li>
                        <li><div class="pill">C#</div></li>
                        <li><div class="pill">GO</div></li>
                        <li><div class="pill">HTML/CSS</div></li>
                      </ul>
                      </div>
                    </a>
                </li>
                <li class="tile">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.alaska.edu">
                    <header>2021 - 2023</header>
                    <div>
                      <h3>
                        <div class="title">Student Systems Engineer
                          <span><font-awesome-icon icon="fa-solid fa-link" size="sm" /></span>
                        </div>
                        <div class="company">University of Alaska</div>
                      </h3>
                      <p>Collabrated with student employees, other department staff and full time systems engineer/web developers to create full-stack web service applications.
                        Worked on resolving tickets, mentoring users on CMS, making school webpages more accessible, and create CI/CD pipeline on various projects.
                      </p>
                      <ul class="pill-list">
                        <li><div class="pill">React</div></li>
                        <li><div class="pill">Vue</div></li>
                        <li><div class="pill">JavaScript</div></li>
                        <li><div class="pill">TypeScript</div></li>
                        <li><div class="pill">Python</div></li>
                        <li><div class="pill">Ruby</div></li>
                        <li><div class="pill">HTML/CSS</div></li>
                        <li><div class="pill">PHP</div></li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ol>
          </div>
        </Transition>
      </section>
      <section id="2" class="proj panel">
        <div class="projects" >
            <div class="sub-header"><h2>PROJECTS</h2></div>
            <Projects />
          </div>
      </section>
    </div>
    <div id="end" class="divider"></div>
  </main>
  <footer>
    <div class="footer-contents">
      <div>
        <p>© 2023, Built by Chuluunbat Purev, Inspiration from   <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a></p>
      </div>
    </div>
  </footer>
</template>
<style>
.fade-leave-from, .fade-enter-to,
.fade-up-leave-from, .fade-up-enter-to,
.fade-in-leave-from, .fade-in-enter-to {
  transition: all 1s ease-in;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-in-enter-active{
  transition-delay: 2.5s;
}
.fade-in-enter-from, .fade-in-leave-to {
  transform: translateX(-7px);
  opacity: 0;
}
</style>