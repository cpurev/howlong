<script setup>
import { onMounted, ref, nextTick } from 'vue'
const items =[
  {name:'Portfolio', description:'My portfolio website created from scratch with Vue3 and Greensock javascript animation library', languages:['Vue', 'Greensock'], link:'/'},
  {name:'Just Draw', description:'A simple minimalistic web app that lets you just draw and share', languages:['NuxtJS'], link:'@'},
  {name:'New Music Friday', description:'A single page web app that uses Spotify API to display all the new music that is coming out in that weeks friday. Future plans are to archive them', languages:['React'], link:'@'},
  {name:'Fletnix', description:'A mock up streaming service site with user authentication and roles', languages:['NextJS', 'MongoDB'], link:'https://fletnix.vercel.app/'},
  {name:'Our Winter World', description:'Created activities for educational puposes using React and Wordpress', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
const moveBy = ref();
const cardNum = ref();
const iteration = ref(0);

onMounted(async () => {
  await nextTick();
  moveBy.value =  document.getElementById("card").offsetWidth + 10;
  cardNum.value = gsap.utils.toArray('#card');
})

function gotoPrevSlide() {
  if(iteration.value == 0) return
  iteration.value -= 1;
  gsap.to(".cards",{
    duration: 0.5,
    x: "+=" + moveBy.value
  })
}

function gotoNextSlide() {
  if(iteration.value == cardNum.value.length - 3) return
  iteration.value += 1;
  gsap.to(".cards",{
    duration: 0.5,
    x: "-=" + moveBy.value
  })
}
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
        <a class="prev" @click="gotoPrevSlide">&#10094;</a>
        <a class="next" @click="gotoNextSlide">&#10095;</a>
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
#card{
  flex: 1 0 31%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  background-color: var(--background-color-ligther);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  padding: 20px;
  margin: 0 10px;
}
#card:hover{
  transform: translateY(-7px);
}
  .card-header{
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .folder{
    color: var(--blue);
  }
  .project-link a{
    color: var(--blue-muted);
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
    font-size: var(--f-medium);
    color: var(--blue-muted);
    line-height: 1.75;
    margin: 0 15px;
  }
  @media (max-width: 992px) {
    .container {  grid-template-columns: auto;}
}   
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 45%;
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
  color: var(--blue-dark);
}

</style>
