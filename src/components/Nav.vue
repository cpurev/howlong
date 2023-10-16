<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

</script>
<template>
    <header>
        <Transition name="fade-down" appear>
            <div class="nav-bar">
              <div class="title">
                <div class="name">
                  <h1>Chuluunbat Purev</h1>
                  <h2>Software Developer</h2>
                </div>
                <div class="links">
                <ul>
                    <li title="Resume">
                      <a href="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA/view?usp=sharing" aria-label="Resume" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-file fa-xl" /></a>
                    </li>
                    <li title="Email">
                      <a href="mailto:puluunbat@gmail.com" aria-label="Email" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-regular fa-envelope fa-xl" /></a>
                    </li>
                    <li title="GitHub">
                      <a href="https://github.com/cpurev" aria-label="GitHub" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-github fa-xl" /></a>
                    </li>
                    <li title="LinkedIn">
                      <a href="https://www.linkedin.com/in/chuluunbat-purev/" aria-label="Linkedin" target="_blank" rel="noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin-in fa-xl" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            <nav>
              <ul>
                <li class="nav0 active"><a href="#0">ABOUT</a></li>
                <li class="nav1"><a href="#1">EXPERIENCE</a></li>
                <li class="nav2"><a href="#2">PROJECTS</a></li>
              </ul>
            </nav>
            </div>
          </Transition>
    </header>
</template>
<style scoped>
header{
  width: 100%;
}
ul{
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.links li{
  font-size: 20px;
  margin: 1rem 0.75rem;
}
a{
  color: white;
}
nav ul{
  display: none;
}
nav ul .active{
  font-size: 26px;
  color: var(--blue);
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  line-height: 1.5;
}
@media only screen and (min-width: 940px) {
  header{
    max-width: 1080px;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .name{
    display: none;
  }
  nav ul{
    display: flex;
    flex-direction: row;
    
  }
  nav li{
    margin: 0 1rem;

    color: white;
    font-size: 16px;

    -webkit-transition: all 1s;
        -moz-transition: all 1s;
          -o-transition: all 1s;
              transition: all 1s;
  }
  nav li a{
  text-decoration: none;
  }
  .nav-bar{
    flex-direction: column;
    align-items: center;
  }
}

</style>
