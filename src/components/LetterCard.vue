<script setup lang="ts">
defineProps(['letter'])
</script>

<template>
  <div class="letter">
    <SoundWaves :sound="letter" />

    <div>{{ letter }}</div>
    <div class="letter-more">подробнее</div>
  </div>
</template>

<style scoped lang="scss">
.letter {
  background: #ffffff;
  gap: 34px;
  height: 216px;
  width: 144px;
  padding: 24px 28px;
  font-size: 48px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: center;
  font-family: monospace;
  flex-direction: column;
  justify-content: flex-start;

  &-icon {
    cursor: pointer;
  }

  &-more {
    font-size: 14px;
    visibility: hidden;
  }
}
</style>
