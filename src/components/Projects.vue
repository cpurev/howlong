<script setup>
import { onMounted } from 'vue'
const items =[
  {name:'Portfolio', description:'My portfolio website created with Vue3 and Greensock javascript animation library', languages:['Vue', 'Greensock'], link:'/'},
  {name:'Fletnix', description:'A mock up streaming service site with user authentication and roles', languages:['NextJS', 'MongoDB'], link:'https://fletnix.vercel.app/'},
  {name:'Just Draw', description:'A simple minimalistic web app that lets you just draw and share', languages:['NuxtJS'], link:'@'},
  {name:'New Music Friday', description:'A single page web app that uses Spotify API to display all the new music that is coming out in that weeks friday. Future plans are to archive them', languages:['React'], link:'@'},
  {name:'Our Winter World', description:'Created activities for educational puposes using React and Wordpress', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
</script>

<template>
  <div class="wrapper">
    <div class="gallery">
      <transition-group 
        appear
        tag="ul"
        class = "cards">
        <li id = "card" v-for="(card, index) in items" :key="card.name" :data-index="index">
          <div class="card-header">
            <div class="folder"><font-awesome-icon icon="fa-regular fa-folder" size="2xl" /></div>
            <div class="project-link">
              <a v-if="card.link != '@'" :href="card.link" :aria-label="card.name" target="_blank" rel="noreferrer" ><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="lg" /></a>
              <p v-else>WIP</p>
            </div>
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
        </li>
      </transition-group>
        <a class="prev" >&#10094;</a>
        <a class="next">&#10095;</a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 333px;
  min-width: 960px;
  padding: 0;
  margin: 0;
  display: flex;
}
.gallery{
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
  border: 1px solid var(--cyan);
  border-radius: 3px;
}
.cards{
  background-color: var(--background-color);
  padding: 1rem;
  display:flex;
  position: relative;
  }
.cards li{
  flex: 1 0 calc(100%/ 3);
  box-shadow: 0 10px 30px -15px var(--accent-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  background-color: var(--background-color-ligther);
  padding: 15px;
  margin: 0 10px;
  width: 30%;
}

  .card-header{
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 35px;
  }
  .folder{
    color: var(--blue);
  }
  .project-link a{
    color: var(--blue-dim);
  }
  h3{
    margin: 0px 0px 10px;
    color: var(--blue-bright);
    font-size: var(--f-xxl);
    font-weight: 600;
    line-height: 1.1;
  }
  p{
    color: var(--blue-dim);
    font-size: 17px;
    font-family: var(--font-sans);
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
    line-height: 1.25;
    margin: 5px;
  }
  @media (max-width: 992px) {
    .container {  grid-template-columns: auto;}
}   
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

</style>
