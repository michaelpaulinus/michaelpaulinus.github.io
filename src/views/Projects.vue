<script lang="ts">
	import ProjectCard from "@/components/ProjectCard.vue";
	import { PROJECTS } from "@/data/data";

	export default {
		components: {
			ProjectCard,
		},

		data() {
			return {
				PROJECTS,
			};
		},
	};
</script>

<template>
	<div>
		<div class="container">
			<h1 class="page-header">Projects/Michael</h1>
		</div>

		<div class="container">
			<v-list
				lines="two"
				bg-color="transparent"
			>
				<v-list-item
					v-for="project in PROJECTS"
					:key="project.url"
				>
					<project-card :item="project" />
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<style>
	.page-header {
		margin: 0 auto;
		font-weight: 700;
		font-size: 3em;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 50rem;
		margin: 0 auto;
		padding: 1.25rem;
	}
</style>
