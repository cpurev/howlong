<script setup>

const items =[
  {img: "golang.png", name:'A GO project', description:'Small GO project for learning', languages:['GO'], link:'@'},
  {img: "scholars_proj.png", name:'UA Scholars', description:'Web service for Alaskan highschool delegators to submit their students for scholarship opportunities in University of Alaska', languages:['TypeScript', 'Vue2', 'Fastify', 'Prisma'], link:'https://www.alaska.edu/scholars/'},
  {img: "spotify_proj.png", name:'Spotify Playlist Creator', description:'A simple tool to create playlist of songs with given text', languages:['TypeScript', 'React', 'NextJS','Tailwind'], link:'@'},
  {img: "prot_proj.png", name:'Portfolio', description:'Portfolio website created from scratch with Vue3 and Greensock javascript animation library', languages:['Vue3', 'Greensock'], link:'/'},
  {img: "fletnix_proj.png", name:'Fletnix', description:'Fully functional mock up streaming site with user authentication and roles', languages:['React', 'NextJS', 'MongoDB', 'Tailwind'], link:'https://fletnix.vercel.app/'},
  {img: "oww_proj.png", name:'Our Winter World', description:'A WordPress plugin for snow educational activities', languages:['React', 'WordPress', 'PHP'], link:'http://ourwinterworld.org/'}
]
const handleClick = (link) => { if(link == "@") return; window.open(link, "_blank"); }

</script>

<template>
  <div class="gallery">
    <table>
      <tr>
        <th> # </th>
        <th>Name</th>
        <th>Description</th>
        <th>Languages</th>
      </tr>
      <tr v-for="(item,index) in items" :key="item.name" :data-index="index" @click="handleClick(item.link)" :class="{active: item.link != '@'}">
        <td>{{ index + 1}}</td>
        <td class="project-name">
          <h3> {{ item.name }} </h3>
          <div class="project-prog">
                <font-awesome-icon v-if="item.link != '@'" icon="fa-solid fa-arrow-up-right-from-square" size="sm" />
                <span v-else>WIP</span>
          </div>
       </td>
       <td><p>{{ item.description }}</p></td>
       <td>
          <ul class ="projects-langs">
            <li v-for="lang in item.languages">{{  lang  }}</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>
