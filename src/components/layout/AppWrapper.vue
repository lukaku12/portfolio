<template>
  <main class="w-full h-full pa-4 md:pa-[4.313rem]">
    <v-card
        class="w-full h-full rounded-[0.5rem] px-0 py-0 border !bg-primary-dark-gray !flex flex-col justify-between overflow-x-hidden">
      <BaseHeader/>
      <Loading v-if="loadingStore.loading"/>
      <slot v-else/>
      <BaseFooter/>
    </v-card>
  </main>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseFooter from "@/components/layout/BaseFooter.vue";
import Loading from "@/components/Loading.vue"
import useLoadingStore from "@/store/modules/loading";

const loadingStore = useLoadingStore();
</script>