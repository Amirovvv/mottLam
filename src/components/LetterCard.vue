<script setup lang="ts">
import { AlphabetItem } from '@/types/alphabet.types'

interface LetterProps {
  letter: AlphabetItem
}

defineProps<LetterProps>()
</script>

<template>
  <div class="letter">
    <SoundWaves :sound="letter.title" />

    <div>{{ letter.title }}</div>
    <router-link :to="{ name: '/[id]', params: { id: letter.id } }">
      <div class="letter-more" v-if="letter.details">подробнее</div>
    </router-link>
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
    color: #1fc2ff;
  }
}
</style>
