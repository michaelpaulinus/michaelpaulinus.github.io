<script lang="ts">
	import type Education from "@/models/Education";
	import type Experience from "@/models/Experience";

	export default {
		props: {
			items: {
				type: Array<Education | Experience>,
				required: true,
			},
		},

		computed: {
			normalizedItems() {
				return this.items.map((item) => {
					if ("title" in item) {
						return {
							title: (item as Experience).title,
							subtitle: (item as Experience).company,
							time: item.time,
							url: item.url,
							imageSrc: item.imageSrc,
						};
					} else {
						return {
							title: (item as Education).course,
							subtitle: (item as Education).university,
							time: item.time,
							url: item.url,
							imageSrc: item.imageSrc,
						};
					}
				});
			},
		},
	};
</script>

<template>
	<v-list
		lines="one"
		bg-color="transparent"
	>
		<v-list-item
			v-for="(item, index) in normalizedItems"
			:key="index"
			:href="item.url"
			:prepend-avatar="item.imageSrc"
			target="_blank"
		>
			<v-list-item-title>{{ item.title }}</v-list-item-title>
			<v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
			<template v-slot:append> {{ item.time }}</template>
		</v-list-item>
	</v-list>
</template>
