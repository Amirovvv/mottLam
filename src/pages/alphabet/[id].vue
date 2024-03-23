<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const letter = route.params.id

const mdComp = computed<Component>(() => {
  return defineAsyncComponent(() =>
    import(`../../components/details/${letter}.md`),
  )
})
</script>

<template>
  <div class="details container-small">
    <Loader :is-loading="!letter.length">
      <div class="details-title">
        <h1>Буква {{ letter }}</h1>
        <SoundWaves :sound="letter" />
      </div>
      <component :is="mdComp" class="details-md" />
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

    h1 {
      font-weight: 500;
    }
  }

  &-md {
    font-size: 18px;
  }
}
</style>
