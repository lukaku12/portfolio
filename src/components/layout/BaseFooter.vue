<template>
  <div
      class="border-t flex text-secondary-blue justify-between min-h-[3.125rem] h-[3.125rem]  items-center">
    <div class="flex h-full w-full items-center justify-between md:justify-normal">
      <BaseButton is-not-clickable class="md:!border-r pl-2 md:pl-4 md:!hidden !inline">find me in:</BaseButton>
      <BaseButton is-not-clickable class="md:!border-r !hidden md:!inline">find me in:</BaseButton>

      <div class="h-full flex">
        <a href="https://www.linkedin.com/in/luka-kurdadze/" target="_blank">
          <BaseButton class="md:!border-r md:!border-l-0 !border-l" :icon="true">
            <v-icon :icon="IconLinkedIn"></v-icon>
          </BaseButton>
        </a>

<!--        <BaseButton class="md:!border-r md:!border-l-0 !border-l" :icon="true">-->
<!--          <v-icon :icon="IconFacebook"></v-icon>-->
<!--        </BaseButton>-->

        <a href="https://github.com/lukaku12" target="_blank" class="h-full">
          <BaseButton class="md:!border-r !border-l md:!hidden" :icon="true">
            <v-icon>
              <IconGithub/>
            </v-icon>
          </BaseButton>
        </a>
      </div>


    </div>

    <a href="https://github.com/lukaku12" class="h-full" target="_blank">
      <BaseButton class="!border-l !hidden md:!inline">
        <span class="hidden md:inline">
          @lukaku12
        </span>
        <v-icon>
          <IconGithub/>
        </v-icon>
      </BaseButton>
    </a>


  </div>
</template>

<script setup lang="ts">

import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import BaseButton from "@/components/layout/BaseButton.vue";
</script>