<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = [
  {name: "Projects", link: "/"},
  {name: "Experience", link: "/experience"},
  {name: "About", link: "/about"},
  {name: "Journal", link: "/logs"},

]

</script>
<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in items">
        <RouterLink :to=item.link active-class="active"> 
          {{ item.name }} 
          <font-awesome-icon class="fa-icon" icon="fa-solid fa-arrow-right" size="2xs"/>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.fa-icon{
  display: none;
}
.active .fa-icon,
a:hover .fa-icon{
  display: inline-block;
}
.active{
  color:var(--blue-dim);
  font-weight: 500;
}
.sidebar{
  min-height: 400px;            /* Full height */
  width: 250px;     
  padding-top: 20px;       /* Padding on top */
  transition: 0.3s;   
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
  color: black;
}

</style>
