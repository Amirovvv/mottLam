<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAlphabetStore } from '@/store/alphabet.store'

const store = useAlphabetStore()

store.fetchAlphabet()

const { alphabet } = storeToRefs(store)
</script>

<template>
  <div class="alphabet">
    <div class="alphabet-title">
      <h1>алфавит</h1>
    </div>

    <div class="alphabet-letters">
      <div
        v-for="item in alphabet"
        :key="item.id"
        class="animated animated-fade-in animated-delay-0.3s"
      >
        <LetterCard :letter="item.title" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alphabet {
  &-title {
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
    padding: 40px 14px 14px;
    text-transform: uppercase;
  }

  &-letters {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
    justify-content: center;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
