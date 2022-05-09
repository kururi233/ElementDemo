<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <ly-button type="primary">测试</ly-button>

  <ly-button type="primary"> 按钮 </ly-button>
  <ly-button type="success"> 按钮 </ly-button>
  <ly-button>按钮</ly-button>
  <ly-button size="small" :circle="true"> 按钮 </ly-button>
</template>

<style lang="scss">
  #app {
    $test: 1px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
