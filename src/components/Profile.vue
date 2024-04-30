<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const intro3 = "View Resume " 

onMounted(() =>{
  gsap.to("#typewriter4", {text: {value: intro3}, duration: 2, delay: 1, ease: "none"})
})
</script>

<template>
    <div class="profile">
        <div class="nameF">
            <h1>Chuluunbat Purev</h1>
            <Transition name="fade" appear>
            <h2>Software Developer</h2>
            </Transition>
        </div>
        <div class="profile" >
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
    </div>
</template>

  
<style scoped>
.nameF{
  display: none;
  margin-right: 70px;
}
.nameF h1{
  font-weight: 900;
  font-size: xx-large;
}
.nameF h2{
  font-size: var(--f-large);
}
.profile p{
  margin: 27px 0;
}

.profile a{
  backdrop-filter: none;
  display: inline-block;
  text-decoration: none;
  color: var(--blue);
  position: relative;
  cursor:pointer;
}
.profile a::after {
  content: "";
  display: block;
  width: 0px;
  height: 1px;
  position: relative;
  bottom: 0.2em;
  background-color: var(--cyan);
  transition: var(--transition);
}
.profile a:hover::after {
  width: 100%;
}
.arrow svg{
  color: var(--blue);
  margin-left: 0.65rem;
}
@media only screen and (min-width: 940px) {
  .nameF{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }
}
</style>