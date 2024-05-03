<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <font-awesome-icon icon = 'fa-regular fa-times-rectangle fa-10x' class="close-icon"/>
      <div class="modal-container" ref="target">
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
}


.close-button {
  margin-right: auto;
  background-color: #f00;
  color: #fff;
  border: none;
  cursor: pointer;
}

</style>
  