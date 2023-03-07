<script setup>
import { ref } from 'vue'

defineProps({
  text: {
    type: String,
    required: false
  }
})
const altText = ref('click me')
const animated = ref(false)

function clickHandler() {
    animated.value = !animated.value
    setTimeout(() => {
      animated = false
    }, 1000)
  }
  
</script>

<template>
  <div>
    <button class="base-btn" @mouseover="clickHandler" :class="{shake : animated}">
      {{ text ? text : altText }}
    </button>
  </div>
</template>

<style scoped>
div{
  border-radius: 3px;
  border: 1px solid var(--blue-dim);
}
.base-btn {
  padding: 1rem 3rem;
  background: transparent;
  font-size: 1rem;
  border-radius: 3px;
  border-color: var(--cyan);
  color: white;
}
.base-btn:hover {
  background: var(--blue-dim);
}
.shake {
  animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
  transform-style: preserve-3d;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(0, -1px, 0);
  }
  20%, 80% {
    transform: translate3d(0, 1px, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(0, -1px, 0);
  }
  40%, 60% {
    transform: translate3d(0, 1px, 0);
  }
}
</style>
