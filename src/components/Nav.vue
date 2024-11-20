<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

</script>
<template>
    <div class="header">
            <div class="nav-bar">
              <div class="title">
                <div class="links">
                <ul>
                    <li title="Email">
                      <a href="mailto:puluunbat@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">email</a>
                    </li>
                    /
                    <li title="GitHub">
                      <a href="https://github.com/cpurev" aria-label="GitHub" target="_blank" rel="noreferrer">github</a>
                    </li>
                    /
                    <li title="LinkedIn">
                      <a href="https://www.linkedin.com/in/chuluunbat-purev/" aria-label="Linkedin" target="_blank" rel="noreferrer">linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
</template>
<style scoped>
.header{
  width: 100%;
}
ul{
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.links li{
  font-size: 20px;
  margin: 1rem 0.75rem;
}
ul, a{
  color: gray;
  text-decoration: none;
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  line-height: 1.5;
  align-items: center;
}
@media only screen and (min-width: 940px) {
  
}

</style>
