<template>
  <div v-if="isOpen" class="modal-mask" >
    <div class="modal-wrapper" ref="target">
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
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-wrapper {
  width: 666px;
  border: 1px solid #000;
  border-radius: 17px;
  padding: 7px;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: row-reverse;
}
.close-icon{
  cursor: pointer;
  color: black;
  float: left;
  padding: 7px 13px;
}
@media only screen and (max-width: 940px) {
  .modal-wrapper{
    max-height: 400px;
    max-width: 300px;
    overflow: scroll;
  }
}
</style>
  