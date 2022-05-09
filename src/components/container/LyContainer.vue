<template>
  <section :class="{ 'ly-container': true, 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script lang="ts">
  export default {
    name: "LyContainer",
  };
</script>

<script setup lang="ts">
  import { useSlots, computed, VNode, Component } from "vue";
  interface Props {
    direction?: string;
  }
  const props = defineProps<Props>();
  const slots = useSlots();
  const isVertical = computed(() => {
    if (slots && slots.default) {
      return slots.default().some((vn: VNode) => {
        const tag = (vn.type as Component).name;
        return tag === "LyHeader" || tag === "LyFooter";
      });
    } else {
      return props.direction === "vertical";
    }
  });
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";
  @include b(container) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    @include when(vertical) {
      flex-direction: column;
    }
  }
</style>
