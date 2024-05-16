<template>
  <v-carousel
      hide-delimiters
      class="!bg-primary-darker-gray rounded"
  >
    <v-carousel-item
        v-for="image in currentProject?.images"
        :key="image"
        :src="image"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
defineProps({
  currentProject: {
    type: Object,
    required: true
  }
});
</script>