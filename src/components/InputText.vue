<script setup>
defineProps({
  placeholder: String
});
</script>


<template>
  <input type="text" :placeholder="placeholder">
</template>

<style scoped>
input[type="text"] {
  width: 100%;
  padding: 1rem;
  font-size: 30px;
  border: 1px solid #DDDDDD;
  background-color: #f2f2f2;
  border-radius: 8px;
}

input::placeholder {
  font-size: 30px;
  color: #c5c5c5;
}
</style>