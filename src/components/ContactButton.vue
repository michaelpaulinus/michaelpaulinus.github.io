<script lang="ts">
export default {
  props: {
    prependIcon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    redirectLink: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <v-btn
    class="d-flex justify-space-between text-truncate"
    append-icon="mdi-arrow-top-right"
    size="large"
    target="_blank"
    :prepend-icon="prependIcon"
    :text="text"
    :href="redirectLink"
  />
</template>
