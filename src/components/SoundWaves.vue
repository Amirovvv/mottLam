<script setup lang="ts">
import { useSound } from '@vueuse/sound'

const props = defineProps(['sound'])

const lowerNameSound = props.sound.toLowerCase()

const urlSound = `src/assets/sounds/letters/${lowerNameSound}.mp3`

const { play } = useSound(urlSound, {
  interrupt: true,
})

const playSound = () => {
  play()
}
</script>

<template>
  <button
    @click="playSound"
    class="i-mdi-volume-high text-28px text-orange letter-icon"
  ></button>
</template>
