<template>
  <div class="w-full h-full border-[rgba(var(--v-border-color),var(--v-border-opacity))]">

    <v-expansion-panel :value="value" rounded="0" class="">
      <v-expansion-panel-title class="!bg-lines-gray border-b md:!bg-primary-dark-gray">
        <div class="flex items-center gap-x-1">
          <slot name="icon"></slot>
          <span :class="active ? 'text-secondary-white' : 'text-secondary-blue' " class="mt-0.5">{{ title }}</span>
        </div>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="!bg-primary-dark-gray !w-full ">
        <v-card rounded="0" flat color="primary-dark-gray" class="!bg-primary-dark-gray !w-full pt-2">
          <slot/>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>

  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  }
});

</script>

<style>
.v-expansion-panel-title,
.v-expansion-panel-title--active,
.v-expansion-panel-title__overlay {
  height: 53px !important;
  min-height: auto !important;
}
</style>