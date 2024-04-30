<script setup>
import { onMounted, defineProps, computed } from 'vue'

const props = defineProps({
    folderName: String,
    iconImg: String,
    link: String,
    color: String,
    x: Number,
    y: Number
    
})

const iconClass = computed(() => 'fa-regular ' + props.iconImg + ' fa-10x')

const handleClick = (event) => {
  if (props.link.startsWith('http://') || props.link.startsWith('https://')) {
    event.preventDefault()
  }
}

onMounted(() =>{
    gsap.registerPlugin(Draggable);
    Draggable.create("#folder", {
        bounds: ".wrapper",
        inertia: true
        });
})
</script>

<template>
    <div id="folder" :style="{ left: x + 'px', bottom: y + 'px', color: color  }">
        <a :href="link" target="_blank" rel="noopener noreferrer" @click="handleClick">
            <font-awesome-icon :icon = iconClass class="folder-icon"/>
            <div class="folder-name">{{ folderName }}</div>
        </a>
    </div>
</template>
  
  
  <style scoped>
  #folder {
    width: 100px;
    height: 100px;
    position: absolute;
    cursor: move;
    padding: 2px;
  }
  a{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }
  #folder:active{
    border: 1px dotted black;
  }
  .folder-icon {
    font-size: 55px;
  }
  
  .folder-name {
    width: 100%;
    height: 30%;
    background: transparent;
    color: black;
    text-align: center;
    line-height: 30px;
  }
  </style>
  