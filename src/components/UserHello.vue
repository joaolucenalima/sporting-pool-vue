<script setup>
</script>

<template>
  <div class="hello-container">
    <p>Olá, João Vitor!</p>
    <img src="@/assets/ProfilePic.png" alt="Profile picture">
  </div>
</template>

<style scoped>
.hello-container {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.2rem;
}

.hello-container p {
  font-size: 22px;
  font-weight: 500;
}

.hello-container img {
  width: 4rem;
  height: 4rem;
}
</style>