<script lang="ts">
	import { PROJECTS } from "@/data/data";

	export default {
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
					v-for="item in PROJECTS"
					:key="item.url"
				>
					<v-card
						:href="item.url"
						target="_blank"
						variant="outlined"
					>
						<v-row align="center">
							<v-col>
								<v-img
									:src="item.imageSrc"
									max-width="auto"
									max-height="auto"
								></v-img>
							</v-col>
							<v-col>
								<v-card-title>{{ item.title }}</v-card-title>
								<v-card-text justify="start">
									{{ item.description }}</v-card-text
								>
							</v-col>
						</v-row>
					</v-card>
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
