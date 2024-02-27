<script setup lang="ts">
interface SectionProps {
  title: string
  desc?: string
}

defineProps<SectionProps>()
</script>

<template>
  <div class="section-card">
    <div class="text-36px section-card__logo">
      <slot name="logo" />
    </div>
    <div class="section-card__content">
      <div class="section-card__title">
        {{ title }}
      </div>
      <div v-if="desc" class="section-card__desc">
        {{ desc }}
      </div>
    </div>
    <slot name="soon" />
  </div>
</template>

<style scoped lang="scss">
.section-card {
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  display: flex;
  padding: 18px 16px;
  align-items: center;
  gap: 16px;
  max-width: 420px;
  width: 420px;
  user-select: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background: #f3f3f3;
  }

  &__content {
    display: flex;
  }

  &__title {
    font-size: 22px;
    font-weight: 500;
  }

  &__desc {
    margin-top: 4px;
  }
}
</style>
