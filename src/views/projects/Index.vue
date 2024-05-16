<template>
  <BaseLayout
      :header-text="selectedTechnologiesText"
      category="_technologies "
      name="_projects "
      :close-btn-is-visible="selectedTechnologiesText !== '_none'"
      @close="projectsStore.clearSelectedTechnologies"
  >

    <template #sidePanel>
      <ProjectsSidePanel
          :readonly="false"
      />
    </template>

    <template #default>
      <div class=" w-full h-full">
        <v-container
            v-if="projects && projects.length > 0"
            class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-x-4">
          <Project v-for="project in projects" :key="project.id" :project="project"/>
        </v-container>
        <InfoMessage v-else>
          <span>_no-projects-found</span>
          <span>_select-technology-to-see-projects</span>
        </InfoMessage>

      </div>
    </template>

  </BaseLayout>
</template>

<script setup lang="ts">
import Project from "@/components/projects/index/Project.vue";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import ProjectsSidePanel from "@/components/projects/ProjectsSidePanel.vue";
import {computed} from "vue";
import useProjectsStore from "@/store/modules/projects";
import InfoMessage from "@/components/InfoMessage.vue";

const projectsStore = useProjectsStore();

const selectedTechnologiesText = computed(() => {
  if (projectsStore.selectedTechnologies.length === Object.keys(projectsStore.technologies).length) {
    return "_all";
  } else if (projectsStore.selectedTechnologies.length === 0) {
    return "_none";
  } else {
    return projectsStore.selectedTechnologies.sort().join(", ");
  }
});

const projects = computed(
    () => projectsStore.projects.filter((project) => {
      if (selectedTechnologiesText.value === '_all') return true;
      if (selectedTechnologiesText.value === '_none') return false;
      // @ts-ignore
      return Object.keys(project.technologies).some((technology) => projectsStore.selectedTechnologies.includes(technology));
    }));


</script>