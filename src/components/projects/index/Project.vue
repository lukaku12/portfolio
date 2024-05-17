<template>
  <div class="mb-5">

    <div class="my-3 text-bodyText">
      <span class="text-secondary-purple font-bold">
        {{ project.title }}
      </span>
      <span class="text-secondary-blue"> / </span>
      <span class="!pt-[1.313rem] !pb-[1.813rem] !h-full text-secondary-blue text-codeSnippet">
        {{ project.tag }}
      </span>
    </div>

    <v-card class="max-w-[368px] h-[331px] max-h-[331px] !bg-primary-darker-gray border !rounded-lg">
      <div class="relative">

        <v-img class="w-full !max-h-[145px] max-w-[368px]" height="145" cover :src="project.main_image"
          alt="project image">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="secondary-blue" indeterminate/>
            </div>
          </template>
        </v-img>

        <div class="absolute right-3 top-3 flex gap-x-1">
          <v-card v-for="technology in project.main_technologies" :key="technology.id"
            class="rounded px-2 py-1 flex items-center justify-center ">
            <v-tooltip location="bottom" :text="technology.label">
              <template v-slot:activator="{ props: tooltip }">
                <v-icon cover v-bind="tooltip" size="20px" :color="technology.color" :icon="technology.icon"
                  alt="project image" />
              </template>
            </v-tooltip>
          </v-card>

        </div>
      </div>

      <v-container class="px-10 py-6">
        <div class="max-h-[70px] overflow-hidden">
          <span class="text-labelText overflow-ellipsis line-clamp-3" v-html="project.description">
          </span>
        </div>
        <div class="mt-5">
          <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">
            <v-btn variant="tonal" rounded="lg" class="!mt-2 !lowercase">
              _view-project
            </v-btn>
          </router-link>
        </div>
      </v-container>

    </v-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>
