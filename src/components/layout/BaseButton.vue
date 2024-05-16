<template>
  <v-btn
      :variant="variant"
      color="transparent"
      rounded="0"
      height="100%"
      :active="isActive"
      :icon="icon"
      :class="{'pointer-events-none': isNotClickable, 'text-white': isActive} "
      class="border-[rgba(var(--v-border-color),var(--v-border-opacity))] h-full flex items-center px-8 relative text-lowercase">
    <span>
      <slot/>
    </span>
    <span v-if="isActive" class="absolute bottom-0 w-full h-0.5 bg-accent-light-orange"></span>
  </v-btn>
</template>

<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  isNotClickable: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String as PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined>,
    default: 'flat'
  }
});
</script>