<template>
  <v-container class="w-full h-full flex items-center justify-between relative overflow-hidden">
    <div class="w-full h-full md:max-w-[400px] md:max-h-[300px] mx-auto border blur-md rounded-xl ">
      <v-card class="!bg-primary-darker-gray w-full h-full blur-md py-10 md:py-0">
        <div
            class="invisible text-center flex flex-col justify-center items-center w-full h-full">
          <slot name="default"/>
        </div>
      </v-card>
    </div>
    <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 !text-secondary-blue text-center flex flex-col opacity-50">
      <slot name="default"/>
    </div>

  </v-container>
</template>

<script setup lang="ts">

</script>
