import { createApp } from "vue";
import App from "./App.vue";
import LyContainer from "@/components/container";

const app = createApp(App);
app.use(LyContainer).mount("#app");
