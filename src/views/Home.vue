<template>
  <div class="w-full h-full max-h-[calc(100%-6.625rem)] overflow-y-hidden">
    <v-container
        class="md:flex w-full h-full justify-center items-center py-0 px-0 !max-w-[1300px]">

      <v-container class="w-full px-[1.688rem] flex  flex-col justify-evenly items-center h-full relative">
        <div class="w-full relative">
          <div class="flex items-center">
            <div class="flex flex-col gap-y-3 z-10 ">
              <p>Hi all. I am</p>
              <h1 class="text-title ">Luka Kurdadze</h1>
              <span class="text-secondary-light-green md:text-secondary-purple text-bodyText md:text-subTitle">
            > Full-Stack Developer
          </span>
            </div>

            <BackgroundBlur class="h-full aspect-square absolute md:hidden"/>
          </div>

        </div>
        <div class="w-full flex flex-col gap-y-4 font-bold z-20">
          <p class="text-secondary-blue">// find my profile on Github:</p>
          <div class=" flex-nowrap w-full">
            <div class="inline">
              <span class="text-secondary-purple">const&nbsp;</span>
              <span class="text-secondary-light-green">githubLink&nbsp;</span>
              <span>=&nbsp;</span>
            </div>
            <a href="https://github.com/lukaku12" target="_blank" class="break-all text-accent-lighter-pink">
              “https://github.com/lukaku12”
            </a>
          </div>
        </div>
      </v-container>

      <v-container
          class="md:max-w-[400px] xl:max-w-none h-full flex-col items-center justify-center pointer-events-none hidden md:flex relative">
        <div class="w-full h-full z-20 flex flex-col md:gap-y-1 xl:gap-y-6 justify-center">
          <v-img
              class="w-[560px] h-[182px] opacity-30"
              :src="codeSnippet"
              alt="code snippet"
          />
          <v-img
              class="w-[560px]  h-[182px] opacity-60"
              :src="codeSnippet"
              alt="code snippet"
          />
          <v-img
              class="w-[560px] h-[182px] opacity-100"
              :src="codeSnippet"
              alt="code snippet"
          />
          <v-img
              class="w-[560px] h-[182px] opacity-60"
              :src="codeSnippet"
              alt="code snippet"
          />
          <v-img
              class="w-[560px] h-[182px] opacity-30"
              :src="codeSnippet"
              alt="code snippet"
          />
        </div>

        <BackgroundBlur class="w-full aspect-square hidden md:flex md:absolute"/>

      </v-container>

    </v-container>
  </div>
</template>

<script setup lang="ts">
import codeSnippet from "@/assets/images/code-snippet.png";
import BackgroundBlur from "@/components/BackgroundBlur.vue";
</script>