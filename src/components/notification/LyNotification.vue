<template>
  <div class="ly-notification" :style="positionStyle" @click="onClickHandler">
    <div class="ly-notification__title">
      {{ title }}
    </div>
    <div class="ly-notification__message">
      {{ message }}
    </div>
    <button
      v-if="showClose"
      class="ly-notification__close-button"
      @click="onCloseHandler"
    ></button>
  </div>
</template>

<script lang="ts">
  export default {
    name: "LyNotification",
  };
</script>

<script lang="ts">
  export default {
    name: "LyNotification",
  };
</script>
<script setup lang="ts">
  import {
    getCurrentInstance,
    ref,
    computed,
    ButtonHTMLAttributes,
    ComponentInternalInstance,
  } from "vue";
  const instance = getCurrentInstance();
  const visible = ref(true);
  interface Props {
    verticalOffset: number;
    position: string;
    title: string;
    message: string;
    showClose: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    verticalOffset: 0,
    position: "top-right",
    title: "",
    message: "",
    showClose: true,
  });
  const verticalOffsetVal = ref(props.verticalOffset);
  const horizontalClass = computed(() => {
    return props.position.endsWith("right") ? "right" : "left";
  });
  const verticalProperty = computed(() => {
    return props.position.startsWith("top") ? "top" : "bottom";
  });
  const positionStyle = computed(() => {
    return {
      [verticalProperty.value]: `${verticalOffsetVal.value}px`,
    };
  });
  const emits = defineEmits(["click", "close"]);

  const onClickHandler = () => {
    emits("click", instance);
  };
  const onCloseHandler = () => {
    emits("close", instance);
  };
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";
  .el-notification {
    position: fixed;
    right: 10px;
    top: 50px;
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
</style>
