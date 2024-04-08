<script setup>
import ProjectLogo from './ProjectLogo.vue';
import UserHello from './UserHello.vue';
</script>

<template>
  <header>
    <ProjectLogo />
    <nav>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/pools">Pools</router-link>
    </nav>
    <UserHello />
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  padding: 1rem;
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