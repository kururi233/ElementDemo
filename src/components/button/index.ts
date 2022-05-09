import { App } from "vue";
import LyButton from "./LyButton.vue";

export default {
  install(app: App) {
    app.component(LyButton.name, LyButton);
  },
};
