<script setup>
import AppHeader from '@/components/AppHeader.vue';
import CreatePoolModal from '@/components/CreatePoolModal.vue';
</script>

<template>
  <div class="pools-page-layout">
    <AppHeader />

    <CreatePoolModal style="align-self: flex-end;" />
  </div>
</template>

<style scoped>
.pools-page-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>