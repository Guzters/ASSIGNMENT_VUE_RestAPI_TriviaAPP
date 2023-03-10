<script setup>
const props = defineProps({
    correct: {
        type: Boolean,
            required: true,
        },
    })
</script>

<template>
    <div class="notification" :class="props.correct ? 'bg-green-600':'bg-red-600'">{{props.correct?'Correct': 'Wrong'}}</div>
</template>

<style lang="postcss" scoped>
    .notification {
        @apply absolute inset-0 flex items-center justify-center text-white font-bold uppercase tracking-widest text-8xl;
    }
</style>