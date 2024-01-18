<script setup lang="ts">
const { locale } = useI18n()

const changeLang = () => {
  const selectedLang = locale.value === 'ru' ? 'ce' : 'ru'
  locale.value = selectedLang
  localStorage.setItem('selected-lang', selectedLang)
}

const buttonLangText = computed(() => {
  return locale.value === 'ru' ? 'ru' : 'ce'
})

onMounted(() => {
  const getSelectedLang = localStorage.getItem('selected-lang')
  if (getSelectedLang) {
    locale.value = getSelectedLang
  }
})
</script>

<template>
  <header>
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav-logo"
          >mottlam
          <div class="i-mdi-image-filter-hdr text-3xl"
        /></router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">алфавит</router-link>
          <button class="nav-lang" @click="changeLang">
            {{ buttonLangText }}
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background: $primary-color;
}

.nav {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  &-logo {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 24px;
    font-weight: 600;
  }

  &-links {
    display: flex;
    font-size: 16px;
  }

  &-link {
    padding: 20px;

    &:hover {
      background: #408b64;
    }
  }

  &-lang {
    padding: 20px;
    width: 60px;
    text-transform: uppercase;
  }
}
</style>
