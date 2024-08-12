<script lang="ts">
	import About from "@/views/About.vue";
	import Projects from "@/views/Projects.vue";
	import { useTheme } from "vuetify";
	import useThemeStore from "@/stores/theme";

	export default {
		components: { About, Projects },

		data() {
			return {
				tab: "one",
			};
		},

		setup() {
			const theme = useTheme();
			const themeStore = useThemeStore();

			function getPreferredColorScheme() {
				if (!themeStore.mode) {
					const userSystemPreference =
						window.matchMedia &&
						window.matchMedia("(prefers-color-scheme: dark)")
							.matches
							? "dark"
							: "light";
					theme.global.name.value = userSystemPreference;
					themeStore.mode = userSystemPreference;
				} else {
					theme.global.name.value = themeStore.mode;
				}
			}

			function toggleTheme() {
				const userPreference = theme.global.current.value.dark
					? "light"
					: "dark";
				theme.global.name.value = userPreference;
				themeStore.mode = userPreference;
			}

			return {
				getPreferredColorScheme,
				toggleTheme,
			};
		},

		mounted() {
			this.getPreferredColorScheme();
		},
	};
</script>

<template>
	<v-app-bar style="margin: 0 auto">
		<v-tabs
			v-model="tab"
			align-tabs="center"
			style="margin: 0 auto"
		>
			<v-tab
				value="one"
				:text="'About'"
			/>
			<v-tab
				value="two"
				:text="'Projects'"
			/>
		</v-tabs>
		<v-btn
			icon="mdi-theme-light-dark"
			@click="toggleTheme"
		/>
	</v-app-bar>

	<div style="padding-top: 4rem">
		<v-window v-model="tab">
			<v-window-item value="one"><About /></v-window-item>
			<v-window-item value="two"><Projects /></v-window-item>
		</v-window>
	</div>
</template>

<style></style>
