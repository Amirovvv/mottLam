<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useAlphabetStore } from '@/store/alphabet.store'
import type { AlphabetItem } from '@/types/alphabet.types'

const route = useRoute()
const store = useAlphabetStore()

store.fetchAlphabetLetter(route.params.id)

const { letter } = storeToRefs(store) as { letter: Ref<AlphabetItem> }
</script>

<template>
  <div class="details">
    <Loader :is-loading="!letter">
      <div class="details-title">
        <h1>Буква {{ letter.title }}</h1>
        <SoundWaves :sound="letter.title" />
      </div>
      <div class="details-text">
        {{ letter.details }}
      </div>
    </Loader>
  </div>
</template>

<style scoped lang="scss">
.details {
  margin-top: 40px;

  &-title {
    display: flex;
    align-items: center;
    gap: 14px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 6px;
  }

  &-text {
    font-size: 18px;
    margin-top: 8px;
  }
}
</style>
