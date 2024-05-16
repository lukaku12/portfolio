<template>
  <BaseLayout
      category="_project "
      name="_project"
      close-btn-is-visible
      @close="router.push({name: 'projects.index'})"
      :header-text="`_${slug}`"
  >

    <template #sidePanel>
      <ProjectsSidePanel
          :readonly="true"
      />
    </template>

    <template #default>
      <div v-if="currentProject" class="overflow-y-auto w-full">
        <v-container>

          <v-card class="!bg-primary-darker-gray">
            <div class="flex flex-col items-center justify-center mt-7">
              <h1 class="text-4xl font-bold text-secondary-blue text-center">{{ currentProject?.title }}</h1>
            </div>

            <section class="flex flex-col xl:flex-row w-full mt-8 xl:max-h-[600px] h-full">

              <div class="w-full xl:w-2/3 md:px-4">
                <div v-if="currentProject" class="bg-primary-darker-gray overflow-x-hidden">
                  <ProjectCarousel class="md:hidden !pt-0" height="300" :currentProject="currentProject"/>
                  <ProjectCarousel class="hidden md:inline" height="600" :currentProject="currentProject"/>
                </div>
              </div>

              <div class="flex flex-col xl:w-1/3 items-center xl:overflow-y-auto md:px-4">
                <div class=" w-full flex flex-col items-center">
                  <div v-if="currentProject" class="w-full">

                    <v-expansion-panels rounded="xl" v-model="panel">

                      <ProjectDetails
                          :active="panel?.includes('project-details') || false"
                          :current-project="currentProject"
                      />
                      <ProjectLinks
                          :active="panel?.includes('project-links') || false"
                          :current-project="currentProject"
                      />
                      <ProjectTechStack
                          :active="panel?.includes('tech-stack') || false"
                          :current-project="currentProject"
                      />

                    </v-expansion-panels>

                  </div>
                </div>
              </div>


            </section>

            <div class="flex flex-col w-full py-10">
              <v-container fluid>

                <div class="flex flex-col items-center justify-center">
                  <p class="text-lg text-secondary-blue indent-10" v-html="currentProject?.description"></p>
                </div>
              </v-container>
            </div>
          </v-card>


        </v-container>
      </div>
      <InfoMessage v-else>
        <h1 class="text-xl font-bold text-secondary-blue text-center">_project-not-found</h1>
      </InfoMessage>
    </template>

  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/layout/BaseLayout.vue";
import {useRoute, useRouter} from "vue-router";
import ProjectsSidePanel from "@/components/projects/ProjectsSidePanel.vue";
import useProjectsStore from "@/store/modules/projects";
import {computed, ref} from "vue";
import ProjectCarousel from "@/components/projects/view/ProjectCarousel.vue";
import ProjectDetails from "@/components/projects/view/ProjectDetails.vue";
import ProjectLinks from "@/components/projects/view/ProjectLinks.vue";
import ProjectTechStack from "@/components/projects/view/ProjectTechStack.vue";
import InfoMessage from "@/components/InfoMessage.vue";

const router = useRouter();
const route = useRoute();

const slug = route.params.slug;

const projectsStore = useProjectsStore();

const panel = ref<string[]>(['tech-stack']);

const currentProject = computed(() => projectsStore.projects.find((p) => p.slug === slug));

</script>
