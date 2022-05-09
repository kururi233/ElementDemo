import { createApp } from "vue";
import App from "./App.vue";
import LyContainer from "@/components/container";
import LyButton from "@/components/button";
import LyForm from "@/components/form";

const app = createApp(App);
app.config.globalProperties.$AILEMENTE = { size: "large" };
app.use(LyContainer).use(LyButton).use(LyForm).mount("#app");
