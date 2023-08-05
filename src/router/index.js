import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login",
			component: LoginView,
		},
		{
			path: "/home",
			name: "home",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/diagnose",
			name: "diagnose",
			component: () => import("../views/DiagnoseView.vue"),
		},
		{
			path: "/diagnose/chat/:id",
			name: "chat",
			component: () => import("../views/ChatView.vue"),
		},
		{
			path: "/get-help",
			name: "get-help",
			component: () => import("../views/GetHelpView.vue"),
		},
	],
});

export default router;
