<script setup>
import AppHeader from '@/components/AppHeader.vue';
import CreatePoolModal from '@/components/CreatePoolModal.vue';
import { ref } from 'vue';

const pools = ref([
  {
    title: "Bolão da firma",
    participants: 10,
    gamesToGuess: 2
  },
  {
    title: "Família e amigos",
    participants: 25,
    gamesToGuess: 0
  },
])

</script>

<template>
  <div class="pools-page-layout">
    <AppHeader />

    <CreatePoolModal style="align-self: flex-end;" />

    <div class="pool-list">
      <div class="pool" v-for="pool in pools">
        <div>
          <h3 class="pool-title">{{ pool.title }}</h3>
          <p class="pool-participants">{{ pool.participants }} participants</p>
        </div>

        <span>
          {{ pool.gamesToGuess }} jogos para palpitar
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pools-page-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.pool {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #BABABA;
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
}

.pool-title {
  font-size: 2rem;
  font-weight: 500;
}

.pool-participants {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.pool span {
  font-size: 20px;
  color: #F53131;
}
</style>