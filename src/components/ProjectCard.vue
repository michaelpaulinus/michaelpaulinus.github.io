<script lang="ts">
	import { defineComponent } from "vue";
	import type Project from "@/models/Project";

	export default defineComponent({
		props: {
			item: {
				type: Object as () => Project,
				required: true,
			},
		},
	});
</script>

<template>
	<v-card
		class="card-container"
		:href="item.url"
		target="_blank"
		variant="outlined"
		rounded="xl"
	>
		<div class="image-container">
			<v-img
				:src="item.imageSrc"
				width="12rem"
				rounded="xl"
			/>
		</div>

		<div class="text-container">
			<div>
				<v-card-title class="text-center">{{ item.title }}</v-card-title>
				<v-card-text> {{ item.description }}</v-card-text>
			</div>
		</div>
	</v-card>
</template>

<style scoped>
	.card-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media (max-width: 600px) {
		.card-container {
			flex-direction: column-reverse;
			justify-content: center;
		}
	}

	.image-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
