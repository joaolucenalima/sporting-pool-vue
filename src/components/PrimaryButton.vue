<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  background-color: #6ED472;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 3rem;
  font-size: 1rem;
  transition: all 0.3s;
}

button span {
  font-size: 30px;
  font-weight: 600
}

button:hover {
  background-color: #62b665;
}
</style>