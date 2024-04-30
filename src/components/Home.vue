<template>
    <div class="folder-wrapper">
        <Folder folderName="Resume" link="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA" color="red" iconImg="fa-file-pdf" :x="-157" :y="200" />
        <Folder folderName="Profile" link="#/profile" color="green" iconImg="fa-folder" :x="-100" :y="100"/>
        <Folder folderName="Experience" link="#/experience" color="cyan" iconImg="fa-folder" :x="100" :y="82"/>
        <Folder folderName="Projects" link="#/projects" color="gray" iconImg="fa-folder" :x="-113" :y="0" />
        <Folder folderName="lifelogs.csv" link="#/logs" color="black" iconImg="fa-file" :x="173" :y="-100" />
      </div>
</template>

<script setup>
import Folder from './Folder.vue'
</script>

<style scoped>
.folder-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>