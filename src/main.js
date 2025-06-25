import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

// 프로젝트 전역에 라우터와 vuetify를 사용하겠다라는 의미
app.use(router);
app.use(vuetify);
app.mount("#app");
