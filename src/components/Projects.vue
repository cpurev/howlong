<script setup>
import { onMounted, ref, nextTick } from 'vue'
const items =[
  {img: "golang.png", name:'A GO project', description:'A webservice written in completely in GO with html templating', languages:['GO'], link:'@'},
  {img: "scholars_proj.png", name:'UA Scholars', description:'Web service for Alaskan highschool delegators to submit their students for scholarship opportunities in University of Alaska', languages:['TypeScript', 'Vue2', 'Fastify', 'Prisma'], link:'https://www.alaska.edu/scholars/'},
  {img: "spotify_proj.png", name:'Spotify Big Picture Player', description:'A spotify playback application that provides better art and audio visualization of tracks', languages:['TypeScript', 'React', 'NextJS','Tailwind'], link:'@'},
  {img: "prot_proj.png", name:'Portfolio', description:'Portfolio website created from scratch with Vue3 and Greensock javascript animation library', languages:['Vue3', 'Greensock'], link:'/'},
  {img: "fletnix_proj.png", name:'Fletnix', description:'Fully functional mock up streaming site with user authentication and roles', languages:['React', 'NextJS', 'MongoDB', 'Tailwind'], link:'https://fletnix.vercel.app/'},
  {img: "oww_proj.png", name:'Our Winter World', description:'A WordPress plugin for snow educational activities', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
const itemsToShow = ref(3)

</script>

<template>
  <div class="gallery">
    <transition-group 
      appear
      tag="ul"
      class = "cards">
      <li v-for="(cardIndex, index) in itemsToShow"
          :key="items[index].name" :data-index="index">
        <div class="card-img">
          <img :src= "'/images/' + items[index].img" alt="project image" /> 
        </div>
        <div class="card">
          <div class="card-header">
            <a v-if="items[index].link != '@'" :href="items[index].link" :aria-label="items[index].name" 
                  target="_blank" rel="noreferrer" class="header-group">
                <h3 class="project-title"> {{ items[index].name }} </h3>
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="sm" />
            </a>
            <div class="header-group" v-else>
              <h3 class="project-title"> {{ items[index].name }} </h3>
              <span>WIP</span>
              </div>
          </div>
          <div class="card-content">
            <div class="project-desc"><p>{{ items[index].description }}</p></div>
          </div>
          <div class="card-footer">
            <ul class ="projects-langs">
              <li v-for="lang in items[index].languages">{{  lang  }}</li>
            </ul>
          </div>
        </div>
      </li>
    </transition-group>
    <div v-if="itemsToShow < items.length || items.length > itemsToShow" >
      <button @click="itemsToShow += 3" class="show-more" aria-label="Show More">
        Show More
        <font-awesome-icon icon="fa-solid fa-chevron-down" size="lg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards{
  padding: 1rem;
  }

li{
  display: flex;
  border-radius: 6px;
  padding: 13px;
  margin-bottom: 1.785rem;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
li:hover{
  background: rgba(143, 189, 248, 0.16);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
}
li:hover .card-img{
  filter: grayscale(0%)
}
li:hover .card-img img{
  border-color: var(--blue);
}
.card{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
}
.header-group{
  display: flex;
  margin: 0 17px;
  color: white;
  text-decoration: none;
}
.card:hover svg{
  translate: 0 -4px;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
.card-img{
  width: 120px;
  margin-top: 14px;
  filter: grayscale(60%)
}
.card-img img{
  object-fit: cover;
  width: 116px;
  height: auto;
  border-radius: 8px;
  border: 1px solid gray;
}
.project-desc{
  margin: 19px 0;
}
.projects-langs{
  display: flex;
  align-items: flex-end;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0px;
  list-style: none;
}
.card-footer li{
  font-family: var(--font-mono);
  font-size: var(--f-medium);
  color: var(--blue-muted);
  line-height: 1.75;
  margin: 0 15px;
  padding: 5px;
} 
span, svg{
  margin: 0 17px;
  color: var(--blue);
}
.show-more{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: var(--cyan);
  cursor: pointer;
  padding: 6px;
}
.show-more:hover{
  border-radius: 11px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 768px) {
  .cards{
    flex-direction: column;
  }
  #card{
    flex: 0;
    margin: 20px;
  }
  .card-img{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
  }
  li{
    flex-direction: column;
  }
  .card-content{
    width: 100%;
  }
}
</style>
