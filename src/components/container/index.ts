import { App } from "vue";
import LyContainer from "./LyContainer.vue";
import LyHeader from "./LyHeader.vue";
import LyAside from "./LyAside.vue";
import LyMain from "./LyMain.vue";
import LyFooter from "./LyFooter.vue";

export default {
  install(app: App) {
    app.component(LyContainer.name, LyContainer);
    app.component(LyHeader.name, LyHeader);
    app.component(LyAside.name, LyAside);
    app.component(LyMain.name, LyMain);
    app.component(LyFooter.name, LyFooter);
  },
};
