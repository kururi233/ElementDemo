import { App } from "vue";
import LyForm from "./LyForm.vue";
import LyFormItem from "./LyFormItem.vue";
import LyInput from "./LyInput.vue";

export default {
  install(app: App) {
    app.component(LyForm.name, LyForm);
    app.component(LyFormItem.name, LyFormItem);
    app.component(LyInput.name, LyInput);
  },
};
