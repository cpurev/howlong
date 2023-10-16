<script setup>
import { onMounted, ref, nextTick } from 'vue'
const items =[
  {name:'Tube Man', description:'Simple page that simulates inflatable tube men', languages:['GO', 'Vue3', ], link:'@'},
  {name:'UA Scholars', description:'Web service for Alaskan highschool delegators to submit their students for scholarship opportunities in University of Alaska', languages:['TypeScript', 'Vue2', 'Fastify', 'Prisma'], link:'@'},
  {name:'Playlist Analyzer', description:'A single page web app that uses Spotify API which let\'s users see the song data and overall playlist data', languages:['TypeScript', 'React', 'NextJS','Tailwind'], link:'@'},
  {name:'Portfolio', description:'Portfolio website created from scratch with Vue3 and Greensock javascript animation library', languages:['Vue3', 'Greensock'], link:'/'},
  {name:'Fletnix', description:'A mock up streaming service site with user authentication and roles', languages:['NextJS', 'MongoDB'], link:'https://fletnix.vercel.app/'},
  {name:'Our Winter World', description:'Created WordPress plugin for snow educational activities', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
const itemsToShow = ref(3)

</script>

<template>
  <div class="gallery">
    <transition-group 
      appear
      tag="ul"
      class = "cards">
      <li v-for="(cardIndex, index) in itemsToShow" class = "card"
          :key="items[index].name" :data-index="index">
        <div class="card-img"></div>
        <div class="card-header">
            <h3 class="project-title"> {{ items[index].name }} </h3>
            <a v-if="items[index].link != '@'" :href="items[index].link" :aria-label="items[index].name" 
                target="_blank" rel="noreferrer" >
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="sm" />
            </a>
            <span v-else>WIP</span>
        </div>
        <div class="card-content">
          <div class="project-desc"><p>{{ items[index].description }}</p></div>
        </div>
        <div class="card-footer">
          <ul class ="projects-langs">
            <li v-for="lang in items[index].languages">{{  lang  }}</li>
          </ul>
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
.card{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  padding: 13px;
  margin-bottom: 1.785rem;
}
.card:hover{
  background: rgba(143, 189, 248, 0.16);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  cursor: pointer;
}
.card a{
  margin: 0 17px;
  color: white;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
.card:hover a{
  translate: 0 -4px;
}.card-header{
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
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
} 
span{
  margin: 0 17px;
  color: var(--color-text);
}
.show-more{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: var(--cyan);
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .cards{
    flex-direction: column;
  }
  #card{
    flex: 0;
    margin: 20px;
  }
}
</style>
