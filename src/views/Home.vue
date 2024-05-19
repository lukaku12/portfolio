<template>
  <div class="w-full h-full max-h-[calc(100%-6.625rem)] overflow-y-hidden">
    <v-container class="md:flex w-full h-full justify-center items-center py-0 px-0 !max-w-[1300px]">

      <v-container class="w-full px-[1.688rem] flex flex-col justify-evenly items-center h-full relative">
        <div class="w-full relative">
          <div class="flex items-center xl:justify-start justify-center">
            <div class="flex flex-col gap-y-3 z-10 ">
              <p>Hi all. I am</p>
              <h1 class="text-title ">Luka Kurdadze</h1>
              <span class="text-secondary-light-green md:text-secondary-purple text-bodyText md:text-subTitle">
                > Full-Stack Developer
              </span>
            </div>

            <BackgroundBlur class="h-full aspect-video absolute lg:hidden" />
          </div>

        </div>
        <div class="w-full flex flex-colfont-bold z-20 xl:justify-start justify-center">
          <div class="flex flex-col gap-y-4">
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

        </div>
      </v-container>

      <v-container
        class="md:max-w-[400px] xl:max-w-none h-full flex-col items-center justify-center hidden lg:flex relative">
        <SnakeGame class="z-50" />
        <BackgroundBlur class="w-full aspect-square hidden md:flex md:absolute" />
      </v-container>

    </v-container>
  </div>
</template>

<script setup lang="ts">
import BackgroundBlur from "@/components/BackgroundBlur.vue";
import SnakeGame from "@/components/home/snake-game/SnakeGame.vue";
</script>