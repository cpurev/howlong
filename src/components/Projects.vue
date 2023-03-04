<script setup>
const cards =[
  {name:'Portfolio', description:'My portfolio website created with Vue3 and Greensock javascript animation library', languages:['Vue', 'Greensock'], link:'\/'},
  {name:'Just Draw', description:'A simple minimalistic web app that lets you just draw and share', languages:['NuxtJS'], link:''},
  {name:'New Music Friday', description:'A single page web app that uses Spotify API to display all the new music that is coming out in that weeks friday. Future plans are to archive them', languages:['React'], link:''},
  {name:'Our Winter World', description:'Created activities for educational puposes using React and Wordpress', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done,
    delay: el.dataset.index * 0.2
  })
}
</script>

<template>
  <div class="card-grid">
    <transition-group 
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      class = "projects"
    >
      <li v-for="(card, index) in cards" :key="card.name" :data-index="index">
        <div class ="card">
          <div class="card-header">
            <div class="folder"><font-awesome-icon icon="fa-regular fa-folder" /></div>
            <div class="project-links"><a :href="card.link" :aria-label="card.name" target="_blank" rel="noreferrer" ><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a></div>
          </div>
          <div class="card-content">
            <h3 class="project-title"> {{ card.name }} </h3>
            <div class="project-desc"><p>{{ card.description }}</p></div>
          </div>
          <div class="card-footer">
            <ul class ="projects-langs">
              <li v-for="lang in card.languages">{{  lang  }}</li>
            </ul>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.card-grid{
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
}
.projects{
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  }
  .card{
    box-shadow: 0 10px 30px -15px var(--accent-color);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: 6px;
    background-color: var(--background-color-ligther);
    overflow: auto;
  }
  .card-header{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 35px;
  }
  h3{
    margin: 0px 0px 10px;
    color: var(--blue);
    font-size: var(--f-xxl);
    font-weight: 600;
    line-height: 1.1;
  }
  p{
    color: var(--blue-bright);
    font-size: 17px;
  }
  .projects-langs{
    display: flex;
    align-items: flex-end;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
  }
  .card-footer li{
    font-family: var(--font-mono);
    font-size: var(--f-xxs);
    line-height: 1.75;
  }
</style>
