<template>
  <v-carousel hide-delimiters class="!bg-primary-darker-gray rounded">
    <v-carousel-item v-for="image in currentProject?.images" :key="image" :src="image">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="secondary-blue" indeterminate />
        </div>
      </template>
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