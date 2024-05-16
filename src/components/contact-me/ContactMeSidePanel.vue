<template>
  <v-expansion-panels multiple v-model="panel">
    <ContactMePanel :active="panel?.includes('contacts') || false"/>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ContactMePanel from "@/components/ContactMePanel.vue";

const panel = ref<string | null>("contacts");
</script>
