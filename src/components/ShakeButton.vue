<script setup>
import { ref } from 'vue'

defineProps({
  text: {
    type: String,
    required: false
  },
  link:{
    type: String,
    required: true
  }
})
const altText = ref('click me')

</script>

<template>
  <a class="base-btn" :href="link" @mouseover="clickHandler">
    {{ text ? text : altText }}
  </a>
</template>

<style scoped>
.base-btn {
  text-decoration: none;
  padding: 1rem 3rem;
  background: transparent;
  font-size: 1rem;
  border: 1px solid var(--cyan);
  border-radius: 3px;
  color: white;

  background: linear-gradient(to left, transparent 50%, var(--blue-dim) 50%) right;
  background-size: 200%;
  transition: .3s ease-out;
}
.base-btn:hover {
  background-position: left;
}
</style>
