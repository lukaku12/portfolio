<template>
  <BaseExpansionPanel
      title="_project-details"
      value="project-details"
      :active="active"
  >
    <div class="flex flex-col gap-x-1">
      <span class="text-secondary-blue text-codeSnippet">
                            <span>
                              _project-status:
                              <span
                                  :style="`color: ${currentProject?.status.color}`"
                                  class=" font-bold break-words">
                                {{ currentProject?.status.status }};
                              </span>
                            </span>
      </span>
      <span class="text-secondary-blue text-codeSnippet">
                            <span>
                              _project-type:
                              <span class="font-bold">{{ currentProject?.tag }};</span>
                            </span>
      </span>
      <span class="text-secondary-blue text-codeSnippet">
        <span>
          _project-start-date:
          <span class="font-bold">{{ currentProject?.start_date }}</span>;
        </span>
      </span>
      <span class="text-secondary-blue text-codeSnippet">
        <span>
          _project-end-date:
          <span class="font-bold">{{ currentProject?.end_date || '~' }}</span>;
        </span>
      </span>
    </div>
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
