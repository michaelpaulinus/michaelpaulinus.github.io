import "./assets/main.css";
import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VueGtag from "vue-gtag";

const app = createApp(App);

const vuetify = createVuetify({
	theme: {
		defaultTheme: "light",
	},
	components,
	directives,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(VueGtag, {
	config: { id: "G-QK8CGE9N8T" },
});
app.mount("#app");
