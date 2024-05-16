<template>
  <v-expansion-panels
      multiple
      v-model="aboutMeStore.panel"
  >

    <BaseExpansionPanel
        :active="aboutMeStore.panel.includes('personal-info')"
        title="personal-info"
        value="personal-info">

      <v-expansion-panels multiple v-model="aboutMeStore.personalInfoPanel">
        <BaseExpansionPanel
            :active="aboutMeStore.personalInfoPanel?.includes('bio')"
            title="bio"
            value="bio">
          <template #icon>
            <v-icon :icon="IconFolder" color="accent-lighter-pink"/>
          </template>
          <FileOpenerContainer>
            <FileOpener
                :icon="IconText"
                title="bio.txt"
            />
          </FileOpenerContainer>
        </BaseExpansionPanel>

        <BaseExpansionPanel
            :active="aboutMeStore.personalInfoPanel?.includes('education')"
            title="education"
            value="education">
          <template #icon>
            <v-icon :icon="IconFolder" color="secondary-purple"/>
          </template>
          <FileOpenerContainer>
            <FileOpener
                :icon="IconText"
                title="university.txt"
            />
            <FileOpener
                :icon="IconText"
                title="courses.txt"
            />
          </FileOpenerContainer>
        </BaseExpansionPanel>

        <BaseExpansionPanel
            :active="aboutMeStore.personalInfoPanel?.includes('work-history')"
            title="work-history"
            value="work-history">
          <template #icon>
            <v-icon :icon="IconFolder" color="secondary-light-green"/>
          </template>
          <FileOpenerContainer>
            <FileOpener
                :icon="IconText"
                title="redberry-intern.txt"
            />
            <FileOpener
                :icon="IconText"
                title="redberry.txt"
            />
          </FileOpenerContainer>
        </BaseExpansionPanel>

      </v-expansion-panels>
    </BaseExpansionPanel>

    <ContactMePanel :active="aboutMeStore.panel?.includes('contacts')"/>

  </v-expansion-panels>
</template>

<script setup lang="ts">
import BaseExpansionPanel from "@/components/BaseExpansionPanel.vue";
import useAboutMeStore from "@/store/modules/about-me";
import ContactMePanel from "@/components/ContactMePanel.vue";
import FileOpenerContainer from "@/components/about-me/FileOpenerContainer.vue";
import IconFolder from "@/components/icons/IconFolder.vue";
import IconText from "@/components/icons/IconText.vue";
import FileOpener from "@/components/about-me/FileOpener.vue";

const aboutMeStore = useAboutMeStore();

</script>