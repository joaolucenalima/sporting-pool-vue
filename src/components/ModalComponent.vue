<script setup>
import X from '@/components/icons/IconX.vue';

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['modal-close', 'submit']);

const submit = () => {
  emit('submit');
  closeModal();
};

const closeModal = () => {
  emit('modal-close');
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-wrapper">
      <div class="modal-content">
        <button class="close-button" @click.stop="closeModal()">
          <X />
        </button>

        <div class="title">
          <slot name="title"></slot>
        </div>

        <form @submit.prevent="submit">
          <slot name="form"></slot>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  z-index: 10;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-content {
  position: relative;
  background-color: white;
  width: 650px;
  padding: 2rem 3rem;
  border-radius: 8px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
}

.close-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  border: none;
}

.close-button svg {
  width: 1rem;
  height: 1rem;
  color: #737373;
}

.title {
  font-size: 36px;
  font-weight: 500;
  line-height: 130%;
}

form {
  margin-top: 2rem;
}
</style>