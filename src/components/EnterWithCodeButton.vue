<script setup>
import { ref } from 'vue';
import InputText from './InputText.vue';
import ModalComponent from "./ModalComponent.vue";
import PrimaryButton from './PrimaryButton.vue';

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <PrimaryButton @click="openModal" text="Entrar com código" />

  <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="">
    <template #title>
      <span>Digite um código para participar de um bolão</span>
    </template>

    <template #form>
      <div class="form-content">
        <InputText placeholder="AAAA-BBBB-CCCC-DDDD" />
        <PrimaryButton text="Entrar" />
      </div>
    </template>
  </ModalComponent>
</template>

<style scoped>
.form-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
</style>