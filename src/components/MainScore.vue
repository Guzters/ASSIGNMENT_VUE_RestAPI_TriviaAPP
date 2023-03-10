<script setup>
import useScore from '@/composables/useScore'
const { score } = useScore()
</script>

<template>
    <p class="score">Score: {{score}}</p>
</template>

<style lang="postcss" scoped>
.score {
  @apply absolute bg-violet-900 border-4 border-black w-40 px-4 py-4 rounded-xl bottom-6 right-3 text-2xl font-bold uppercase text-white
}
</style>