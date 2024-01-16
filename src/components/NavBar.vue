<script setup lang="ts"></script>

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
}
</style>
