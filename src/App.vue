<script setup>
import { onMounted, shallowRef, ref } from 'vue'
import { Analytics } from '@vercel/analytics/vue';

import Logs from './components/Logs.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Nav from './components/Nav.vue'
import Folder from './components/Folder.vue'
import Modal from './components/Modal.vue'

const isModalOpened = shallowRef(false);
const currentComponent = shallowRef(null);

const windows = {
  'profile': Profile,
  'experience': Experience,
  'projects': Projects,
  'logs': Logs,
}

const openModal = (str) => {
  isModalOpened.value = true;
  currentComponent.value = windows[str]
};
const closeModal = () => {
  isModalOpened.value = false;
};

</script>

<template>  
  <Analytics />
  <main>
    <div class="wrapper" >
      <Nav />
      <Modal :isOpen="isModalOpened" @modal-close="closeModal"  name="first-modal">
        <component :is="currentComponent"></component>
      </Modal>
       <div class="folder-wrapper">
        <a href="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA" target="_blank" rel="noopener noreferrer">
          <Folder folderName="Resume" link="https://drive.google.com/file/d/1p_oI140qzwjDMW-zNRVfYdI1e23R6yKA" color="red" iconImg="fa-file-pdf" :x="0" :y="-160" />
        </a>
        <Folder folderName="Profile" @click="openModal('profile')" color="green" iconImg="fa-folder" :x="-223" :y="100"/>
        <Folder folderName="Experience" @click="openModal('experience')"  color="cyan" iconImg="fa-folder" :x="126" :y="-79"/>
        <Folder folderName="Projects" @click="openModal('projects')"  color="gray" iconImg="fa-folder" :x="-50" :y="60" />
        <Folder folderName="logs.csv" @click="openModal('logs')"  color="black" iconImg="fa-file" :x="-202" :y="-50" />
      </div>
    </div>
  </main>
  <footer>
    <div class="footer-contents">
      <div>
        <p>© 2024, Built by Chuluunbat Purev, Inspiration from   <a href="https://oklama.com/" target="_blank" rel="noreferrer">Oklama</a></p>
      </div>
    </div>
  </footer>
</template>