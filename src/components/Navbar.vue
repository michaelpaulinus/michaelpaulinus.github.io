<script lang="ts">
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import { useTheme } from 'vuetify'

export default {
  components: { About, Projects },

  data() {
    return {
      tab: 'one'
    }
  },

  setup() {
    const theme = useTheme()

    function getPreferredColorScheme() {
      theme.global.name.value =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    }

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      getPreferredColorScheme,
      toggleTheme
    }
  },

  mounted() {
    this.getPreferredColorScheme()
  }
}
</script>

<template>
  <v-app-bar style="margin: 0 auto">
    <v-tabs v-model="tab" align-tabs="center" style="margin: 0 auto">
      <v-tab value="one" :text="'About'" />
      <v-tab value="two" :text="'Projects'" />
    </v-tabs>
    <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
  </v-app-bar>

  <div class="page-content" style="padding-top: 5%">
    <v-window v-model="tab">
      <v-window-item value="one"><About /></v-window-item>
      <v-window-item value="two"><Projects /></v-window-item>
    </v-window>
  </div>
</template>

<style></style>
