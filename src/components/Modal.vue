<template>
  <div v-if="isOpen" class="modal-mask" ref="target">
    <div class="modal-wrapper">
      <font-awesome-icon icon = 'fa-solid fa-x fa-10x' @click="handleClick" class="close-icon"/>
      <div class="modal-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { onMounted, ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'

  const props = defineProps({
    isOpen: Boolean,
  });

  const handleClick = () => { emit('modal-close') }
  const emit = defineEmits(["modal-close"]);

  const target = ref(null)
  onClickOutside(target, ()=>emit('modal-close'))
</script>
  
<style scoped>
.modal-mask{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
.modal-wrapper {
  width: 100%;
  border: 2px solid #000;
  border-radius: 17px;
  padding: 7px;
  background-color: var(--blue-dark);
  z-index: 999;
  display: flex;
  flex-direction: row-reverse;
}
.close-icon{
  cursor: pointer;
  color: white;
  float: left;
  padding: 7px 13px;
}

</style>
  