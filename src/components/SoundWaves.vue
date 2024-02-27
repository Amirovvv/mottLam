<script setup lang="ts">
import { useSound } from '@vueuse/sound'

interface SoundProps {
  sound: string
}

const props = defineProps<SoundProps>()

const lowerNameSound: string = props.sound.toLowerCase()

const urlSound: string = `src/assets/sounds/letters/${lowerNameSound}.mp3`

const { play } = useSound(urlSound, {
  interrupt: true,
}) as { play: () => void }

function playSound(): void {
  play()
}
</script>

<template>
  <button
    class="i-mdi-volume-high text-28px text-orange letter-icon"
    @click="playSound"
  />
</template>
