<template>
  <div class="!absolute w-full h-[calc(100%-6.625rem)] top-[3.5rem] left-0 z-30">
    <v-card rounded="0" class="!bg-primary-dark-gray w-full h-full">
      <v-container class="px-0 py-0 w-full !h-full flex flex-col justify-between items-stretch">

        <div class="flex flex-col w-full items-center">
          <router-link
              v-for="route in routes"
              :key="route.name"
              :to="{name: route.name}"
              class="w-full"
          >
            <BaseButton
                :is-active="isActive(route.active)"
                @click="$emit('close')"
                class="border-b w-full py-4"
            >
              {{ route.title }}
            </BaseButton>
          </router-link>
        </div>
      </v-container>
    </v-card>
  </div>

</template>

<script setup lang="ts">
import BaseButton from "@/components/layout/BaseButton.vue";
import {PropType} from "vue";

defineProps({
  routes: {
    type: Array as PropType<{ name: string; title: string; active: string[], class: string }[]>,
    required: true
  },
  isActive: {
    type: Function as PropType<(routeName: string[]) => boolean>,
    required: true
  }
});

</script>
