<template>
  <BaseLayout
      :header-text="aboutMeText"
      name="_personal-info "
      category="_personal-info "
      close-btn-is-visible
      @close="aboutMeStore.setSelectedFile('')"
  >
    <template #sidePanel>
      <AboutMeSidePanel/>
    </template>

    <template #default>
      <div
          v-if="text"
          :key="text"
          class="w-full h-full !max-w-[674px] md:border-r border-[rgba(var(--v-border-color),var(--v-border-opacity))]">
        <div class="!relative w-full h-full flex text-secondary-blue">
          <CodeSnippet with-comments>
            <span v-html="text"></span>
          </CodeSnippet>
        </div>
      </div>
      <InfoMessage v-else>
        <span class="text-bodyText font-bold">_no-file-selected</span>
        <span>_select-a-file-to-view</span>
      </InfoMessage>

    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import useAboutMeStore from "@/store/modules/about-me";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import AboutMeSidePanel from "@/components/about-me/AboutMeSidePanel.vue";
import CodeSnippet from "@/components/CodeSnippet.vue";
import {computed} from "vue";
import InfoMessage from "@/components/InfoMessage.vue";

const aboutMeStore = useAboutMeStore();

const aboutMeText = computed(() => aboutMeStore.selectedFile);

const text = computed(() => aboutMeStore.text);

</script>
