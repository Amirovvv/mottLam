<script setup lang="ts"></script>

<template>
  <div class="main container-small">
    <div class="main-sections">
      <router-link to="/alphabet" class="main-sections-link">
        <SectionCard title="Алфавит">
          <template v-slot:logo>
            <div class="i-noto-v1-a-button-blood-type"></div>
          </template>
        </SectionCard>
      </router-link>
      <SectionCard title="Игровой раздел" class="soon">
        <template v-slot:logo>
          <div class="i-twemoji-game-die"></div>
        </template>
        <template v-slot:soon
          ><div class="main-sections__soon">скоро</div>
        </template>
      </SectionCard>
    </div>
    <div class="main-about">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        minima adipisci hic similique molestiae nobis tenetur exercitationem,
        quis, error cupiditate laborum, voluptate mollitia cum unde architecto
        reiciendis nesciunt repellat obcaecati.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  margin-top: 40px;

  &-sections {
    display: flex;
    justify-content: space-evenly;
    gap: 36px;

    &-link {
      display: contents;
    }

    &__soon {
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      padding: 5px 12px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
    }
  }

  &-about {
    margin-top: 40px;
    color: #4b4b4b;
  }
}

.soon {
  opacity: 0.5;
  pointer-events: none;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
