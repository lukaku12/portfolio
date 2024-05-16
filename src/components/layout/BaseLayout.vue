<template>
  <div class="w-full h-full max-h-[calc(100%-6.625rem)] overflow-x-hidden overflow-y-auto">
    <v-container
        fluid
        class="md:flex w-full h-full justify-center items-center py-0 px-0 md:!justify-start">

      <section class="md:h-full flex flex-col md:flex-row max-h-full w-full">

        <div
            class="md:min-w-[20rem] md:max-w-[20rem] md:h-full md:overflow-y-auto md:border-r border-[rgba(var(--v-border-color),var(--v-border-opacity))]">

          <BaseButton
              is-not-clickable
              class="!pt-[1.313rem] !pb-[1.813rem] w-full md:!hidden">
            {{ name }}
          </BaseButton>

          <slot name="sidePanel"/>
        </div>

        <v-container fluid class="md:w-full md:h-full px-0 pt-0 !pb-0">

          <header
              v-if="headerText"
              class="md:border-b border-[rgba(var(--v-border-color),var(--v-border-opacity))] flex flex-col items-center md:block l md:h-[3.3rem] gap-y-2">
              <span class="md:hidden min-w-[120px] max-h-[24px] mt-2">
                // {{ category }}
              </span>

            <div
                class="md:h-full w-fit md:flex items-center md:!border-r text-secondary-blue border-[rgba(var(--v-border-color),var(--v-border-opacity))] break-words md:px-4">
              <span class="text-secondary-blue md:text-secondary-white md:hidden max-h-[24px]">/&nbsp;</span>
              <span>{{ headerText }}</span>
              <v-btn
                  v-if="closeBtnIsVisible"
                  color="transparent"
                  @click="$emit('close')"
                  variant="flat"
                  :icon="IconClose"
                  density="compact"
                  class="hidden md:inline ml-2 hover:text-white cursor-pointer"
              />
            </div>
          </header>

          <main class="w-full h-full flex max-h-[calc(100%-3.3rem)] overflow-y-auto">
            <slot name="default"/>
          </main>

        </v-container>
      </section>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/layout/BaseButton.vue";
import IconClose from "../icons/IconClose.vue";

defineProps({
  headerText: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  closeBtnIsVisible: {
    type: Boolean,
    default: false,
  },
});
</script>
