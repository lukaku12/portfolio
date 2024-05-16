<template>
  <div
      :class="aboutMeStore.selectedFile === title ? 'bg-primary-darker-gray border-b text-white' : ''"
      @click="aboutMeStore.setSelectedFile(title)"
      class="flex gap-x-1 cursor-pointer"
  >
    <v-icon color="secondary-blue">
      <component :is="icon"/>
    </v-icon>
    <span class="pl-1">{{ title }}</span>
  </div>

</template>

<script setup lang="ts">
import useAboutMeStore from "@/store/modules/about-me";

defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const aboutMeStore = useAboutMeStore();

</script>