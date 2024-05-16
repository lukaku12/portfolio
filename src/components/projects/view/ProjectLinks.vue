<template>
  <BaseExpansionPanel
      title="_project-links"
      value="project-links"
      :active="active"
  >
    <div class="flex flex-col gap-x-1">

      <div class="text-secondary-blue text-codeSnippet">

        <div v-if="typeof currentProject?.sourceCode === 'string'">

          _project-source-code:
          <span v-if="currentProject?.sourceCode === '_private'" class="font-bold">
            _private
          </span>
          <a v-else class="font-bold" :href="currentProject?.sourceCode">
            see here!
          </a>

        </div>

        <div v-if="typeof currentProject?.sourceCode === 'object'">
          <div class="flex flex-col">
            _project-source-code:
            <div
                v-for="source in Object.keys(currentProject?.sourceCode)"
                :key="currentProject?.sourceCode[source]"
            >
              <span class="ml-8">{{ source }}:</span>
              <a class="font-bold" :href="currentProject?.sourceCode[source]">
                _click-me!
              </a>
            </div>
          </div>


        </div>
        <div class="text-secondary-blue text-codeSnippet">
                              <span>
                                _project-website:
                                <span class="font-bold" v-if="currentProject?.website">
                                  <a :href="currentProject?.website" target="_blank">
                                    {{ currentProject?.website }}
                                  </a>
                                </span>
                                <span v-else class="font-bold">_coming-soon</span>

                              </span>
        </div>
      </div>

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