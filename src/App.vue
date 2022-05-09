<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { FormType } from "@/components/form/type";

  const model = reactive({
    username: "",
    password: "",
  });
  const rules = reactive({
    username: [
      {
        required: true,
        message: "请输入用户名！",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码！",
      },
    ],
  });
  const myForm = ref<FormType>();
  const login = () => {
    myForm.value?.validate((isValid) => {
      console.log("isValid", isValid);
      if (isValid) {
        console.log(model);
      } else {
        alert("请正确填写表单！");
      }
    });
  };
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ly-button type="primary">测试</ly-button>

  <ly-button type="primary"> 按钮 </ly-button>
  <ly-button type="success"> 按钮 </ly-button>
  <ly-button>按钮</ly-button>
  <ly-button size="small" :circle="true"> 按钮 </ly-button>

  <div>
    <ly-form ref="myForm" :model="model" :rules="rules">
      <ly-form-item label="用户名：" prop="username">
        <ly-input v-model="model.username" />
      </ly-form-item>
      <ly-form-item label="密码：" prop="password">
        <ly-input v-model="model.password" type="password" />
      </ly-form-item>
      <br />
      <ly-form-item>
        <ly-button type="primary" @click="login"> 登 录 </ly-button>
      </ly-form-item>
    </ly-form>
  </div>
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
