<script setup lang="ts">
defineProps(['letter'])
</script>

<template>
  <div class="letter">
    <span>{{ letter }}</span>
  </div>
</template>

<style scoped>
.letter {
  background: #ffffff;
  height: 160px;
  width: 108px;
  padding: 10px 28px;
  font-size: 48px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
}
</style>
