<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'

const el = ref(null);
const nl = ref(null);

const observer = new IntersectionObserver((entries, observer) => {
  //console.log(entries)
});


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
            <h2>Software Developer</h2>
          </div>
          <div class="profile" >
            <div class="sub-header"><h2>ABOUT</h2></div>
            <p>
              One of my earliest memories is playing Zuma and COD: World At War in an <a href="https://en.wikipedia.org/wiki/PC_bang" aria-label="Wikipedia link" target="_blank" rel="noreferrer">internet cafe</a>
              my dad owned when I was little. As long as I remember I was fascinated by the endless possibilities computers offered.
              I knew that I wanted to create software that is part of lots of peoples lives.
            </p>
            <p> 
              These days I've been working as a <strong>Software Developer</strong> at a local goverment, creating full-stack web applications using Azure and Node. 
              While also looking for Master's programme in Machine Learning.
              In my free time I make sites that I think I'll learn the most from, just intresting and cool or I have a need for it (like this).
            </p>
            <p>
              If I'm not sitting at my desk either working or playing games, 
              I'm at a gym rock climbing or out on some adventure.
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA/view?usp=sharing">View Resume <font-awesome-icon icon="fa-solid fa-arrow-right"/></a>
          </div>
      </section>
      <div id="experience" class="divider"></div>
      <section id="1" class="panel">
        <div class="experience" >
            <div class="sub-header"><h2>EXPERIENCE</h2></div>
            <ol>
              <li class="tile">
                <div>
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
                </div>
              </li>
              <li class="tile">
                <div>
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
                </div>
              </li>
            </ol>
        </div>
      </section>
      <div id="projects" class="divider"></div>
      <section id="2" class="panel">
        <div class="projects" >
            <div class="sub-header"><h2>PROJECTS</h2></div>
            <Projects />
          </div>
      </section>
    </div>
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
.fade-up-leave-from, .fade-up-enter-to {
  transition: all 1s ease-in;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>