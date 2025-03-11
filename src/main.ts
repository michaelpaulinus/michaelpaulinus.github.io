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
import { HEAP_APP_IDS } from "./config/heap";

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
addHeapAnalytics();
app.mount("#app");

function addHeapAnalytics() {
	const HEAP_APP_ID = import.meta.env.PROD
		? HEAP_APP_IDS.PRODUCTION
		: HEAP_APP_IDS.DEVELOPMENT;

	const script = document.createElement("script");
	script.type = "text/javascript";
	script.innerHTML = `window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};heap.load("${HEAP_APP_ID}");`;

	document.head.appendChild(script);
}
