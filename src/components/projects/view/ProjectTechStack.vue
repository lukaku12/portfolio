<template>
  <BaseExpansionPanel
      :active="active"
      value="tech-stack"
      title="_tech-stack"
  >
    <v-card
        v-for="technology in currentProject?.technologies"
        :key="technology?.label"
        class="rounded px-2 py-1 inline items-center mt-1"
    >
      <v-tooltip
          location="bottom"
          :text="technology?.label"
      >
        <template
            v-slot:activator="{ props: tooltip }"
        >
          <div class="!flex">
            <v-icon
                cover v-bind="tooltip"
                class="mr-1 mt-0.5 brightness-150"
                size="20px"
                :color="technology?.color"
                :icon="technology?.icon"
                alt="project image"
            />
            <div>
              <span class="text-secondary-blue text-codeSnippet">
                &nbsp;- {{ technology?.description }}
              </span>
            </div>
          </div>

        </template>
      </v-tooltip>
    </v-card>
  </BaseExpansionPanel>

</template>

<script setup lang="ts">
import BaseExpansionPanel from "@/components/BaseExpansionPanel.vue";

defineProps({
  currentProject: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean || undefined,
    required: true
  }
});
</script>