<script setup>
import CreatePoolModal from './CreatePoolModal.vue';
import ProjectLogo from './ProjectLogo.vue';
import UserHello from './UserHello.vue';
</script>

<template>
  <div class="pools-page-layout">
    <header>
      <ProjectLogo />
      <nav>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/pools">Pools</router-link>
      </nav>
      <UserHello />
    </header>

    <CreatePoolModal style="align-self: flex-end;" />
  </div>
</template>

<style scoped>
.pools-page-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

header {
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  gap: 3rem;
}

nav {
  justify-self: start;
}

nav a {
  font-size: 25px;
  font-weight: 600;
  color: black;
}

nav a:not(:first-child) {
  margin-left: 1rem;
}

.router-link-active {
  color: #4CAF50;
}
</style>