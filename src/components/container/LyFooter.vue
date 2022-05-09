<template>
  <footer class="ly-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script lang="ts">
  export default {
    name: "LyFooter",
  };
</script>

<script setup lang="ts">
  import { withDefaults } from "vue";

  interface Props {
    height?: string;
  }
  withDefaults(defineProps<Props>(), {
    height: "60px",
  });
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";
  @include b(input) {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    @include m(inner) {
      width: 300px;
    }
  }
</style>
