<script lang="ts">
import type EducationItem from '@/models/EducationItem'
import type ExperienceItem from '@/models/ExperienceItem'

export default {
  props: {
    items: {
      type: Array<EducationItem | ExperienceItem>,
      required: true
    }
  },

  computed: {
    normalizedItems() {
      return this.items.map((item) => {
        if ('title' in item) {
          return {
            title: (item as ExperienceItem).title,
            subtitle: (item as ExperienceItem).company,
            time: item.time,
            url: item.url,
            imageSrc: item.imageSrc
          }
        } else {
          return {
            title: (item as EducationItem).course,
            subtitle: (item as EducationItem).university,
            time: item.time,
            url: item.url,
            imageSrc: item.imageSrc
          }
        }
      })
    }
  }
}
</script>

<template>
  <v-list lines="one">
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
