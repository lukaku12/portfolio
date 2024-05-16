<template>
  <main class="w-full h-full pa-4 md:pa-[4.313rem]">
    <v-card
        class="w-full h-full rounded-[0.5rem] px-0 py-0 border !bg-primary-dark-gray !flex flex-col justify-between overflow-x-hidden">
      <BaseHeader/>
      <slot/>
      <BaseFooter/>
    </v-card>
  </main>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseFooter from "@/components/layout/BaseFooter.vue";
</script>