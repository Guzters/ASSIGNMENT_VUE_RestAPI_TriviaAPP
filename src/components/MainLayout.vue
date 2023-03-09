<script setup>
import MainScore from "@/components/MainScore.vue"
</script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
  <MainScore />
</template>

<style lang="postcss" scoped>
main{
  @apply justify-center items-center min-h-fit bg-gradient-to-t from-green-200 via-green-400 to-purple-700;
    & .card {
        @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg p-8 shadow-lg;
        margin-left: 5%;
        background-image: url(/src/assets/FolkBlack.png);
    }
}

</style>
