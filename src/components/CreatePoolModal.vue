<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { ref } from 'vue';

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <PrimaryButton @click="openModal()" text="Criar bolão" />

  <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="">
    <template #title>
      <span>Crie um novo bolão</span>
    </template>
    <template #content>
      <p>Insira o nome do bolão e o valor da aposta</p>
    </template>
  </ModalComponent>
</template>