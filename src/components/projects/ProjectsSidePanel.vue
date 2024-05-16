<template>
  <div>
    <v-expansion-panels v-model="projectsStore.panel" class="w-full h-full">
      <BaseExpansionPanel active value="projectPanel" title="technologies">

        <div class="flex gap-x-2 items-center !bg-transparent">
          <v-checkbox
              id="selectAll"
              multiple
              color="secondary-blue"
              base-color="secondary-blue"
              v-model="selectAll"
              @update:model-value="setSelectAll"
              :readonly="readonly"
              hide-details
          />
          <label for="selectAll" class="flex gap-x-2 cursor-pointer">
            <span>_select-all</span>
          </label>
        </div>

        <div v-for="(technology, index) in projectsStore.technologies" :key="index"
             class="flex gap-x-2 items-center !bg-transparent">
          <v-checkbox
              :id="index.toString()"
              multiple
              color="secondary-blue"
              base-color="secondary-blue"
              v-model="projectsStore.selectedTechnologies"
              :value="technology.value"
              :readonly="readonly"
              hide-details
          />
          <label :for="index.toString()" class="flex gap-x-2 cursor-pointer">
            <v-icon color="secondary-blue" :icon="technology.icon"/>
            <span>{{ technology.label }}</span>
          </label>
        </div>
      </BaseExpansionPanel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import BaseExpansionPanel from "@/components/BaseExpansionPanel.vue";
import useProjectsStore from "@/store/modules/projects";
import {ref, watch} from "vue";

defineProps({
  readonly: {
    type: Boolean,
    required: true
  },
});

const projectsStore = useProjectsStore();

const selectAll = ref(projectsStore.selectedTechnologies.length === projectsStore.technologies.length);

const setSelectAll = () => {
  if (projectsStore.selectedTechnologies.length === projectsStore.technologies.length) {
    projectsStore.selectedTechnologies = [];
  } else {
    projectsStore.selectedTechnologies = projectsStore.technologies.map((technology) => technology.value);
  }
};

watch(() => projectsStore.selectedTechnologies, () => {
  selectAll.value = projectsStore.selectedTechnologies.length === projectsStore.technologies.length;
});


</script>
