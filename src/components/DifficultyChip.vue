<script setup>
const props = defineProps({
    difficulty: {
        type: String,
        required: true,
        }
    })
</script>

<template>
    <p class="difficulty" :class="props.difficulty === 'easy' ? 'bg-green-600' :
          props.difficulty === 'medium' ? 'bg-yellow-600' : 'bg-red-500'">
      {{props.difficulty}}
    </p>
</template>

<style lang="postcss" scoped>
.difficulty {
  @apply absolute border-4 border-black w-36 px-4 py-4 rounded-xl bottom-6 left-7 text-2xl font-bold uppercase text-white
}
</style>