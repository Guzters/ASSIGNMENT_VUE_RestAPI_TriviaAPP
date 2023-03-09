<template>
  <div class="brand">
    <slot name="logo" />
    <h1 class="title">
      <slot />
    </h1>
    <slot name="logo" />
  </div>
</template>

<style lang="postcss" scoped>
      .brand{
    @apply flex bg-black border-4 border-slate-700 rounded-lg items-center justify-center gap-4;

    & :slotted(img) {
      @apply h-16 w-16;
    }

    & .title{
      @apply bg-black w-11/12 ml-9 mr-9 text-6xl font-thin uppercase tracking-widest text-gray-400;
    }
  }
</style>