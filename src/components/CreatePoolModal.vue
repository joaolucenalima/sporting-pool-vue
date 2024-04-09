<script setup>
import ModalComponent from '@/components/ModalComponent.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { ref } from 'vue';
import InputText from './InputText.vue';

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <div>
    <PrimaryButton @click="openModal()" text="Criar bolão" />

    <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="">
      <template #title>
        <span>Crie um novo bolão</span>
      </template>

      <template #form>
        <div class="form-content">
          <div class="form-field">
            <label>Nome do bolão</label>
            <InputText placeholder="Ex.: Bolão da firma" />
          </div>

          <div class="form-field">
            <label>Código do bolão</label>
            <InputText placeholder="AAAA-BBBB-CCCC-DDDD" />
          </div>

          <div class="form-field">
            <label>Máx. participantes</label>
            <input type="number" name="participantes" value="10" min="2" max="30">
          </div>

          <PrimaryButton text="Criar" style="align-self: flex-end; width: 30%; margin-top: -1rem;" />
        </div>
      </template>
    </ModalComponent>
  </div>
</template>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-content label {
  font-weight: 400;
  font-size: 30px;
  display: block;
}

.form-content input[type="number"] {
  max-width: 20%;
  padding: 1rem;
  font-size: 30px;
  border: 1px solid #DDDDDD;
  background-color: #f2f2f2;
  border-radius: 8px;
  text-align: center;
}
</style>