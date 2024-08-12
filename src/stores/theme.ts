import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
	persist: true,

	state: () => ({
		mode: null as string | null,
	}),

	actions: {
		setTheme(mode: string) {
			this.mode = mode;
		},
	},
});

export default useThemeStore;
