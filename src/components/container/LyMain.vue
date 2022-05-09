<template>
  <main class="ly-main">
    <slot />
  </main>
</template>

<script lang="ts">
  export default {
    name: "LyMain",
  };
</script>

<script setup lang="ts"></script>
<style lang="scss">
  @import "@/styles/mixin.scss";
  @include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 0 20px;
  }
</style>
