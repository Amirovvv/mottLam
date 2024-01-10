<script setup lang="ts"></script>

<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="nav-logo"
        >mottlam
        <div class="i-mdi-mountain-outline text-3xl"
      /></router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">алфавит</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background: #1b232c;
  color: #ffffff;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1140px;
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
      background: #2a343f;
    }
  }
}
</style>
