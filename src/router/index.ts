import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "About",
			component: About,
		},
		{
			path: "/projects",
			name: "Projects",
			component: Projects,
		},
	],
});

router.beforeEach((to, from, next) => {
	document.title = to.name?.toString() + " | Michael Paulinus";
	next();
});

export default router;
