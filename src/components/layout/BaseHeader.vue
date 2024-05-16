<template>
  <header class="border-b min-h-[3.5rem] h-[3.5rem] flex flex-col items-center justify-center text-secondary-blue">
    <div class="w-full pl-[1.125rem] md:pl-[0] h-full flex items-center">
      <div class="flex h-full md:w-auto items-center justify-between w-full">
        <BaseButton is-not-clickable class="pl-0 md:w-[20rem] md:!border-r">luka-kurdadze</BaseButton>
        <BaseButton
            class="inline md:!hidden h-full pr-5"
            @click="setBurgerMenuIsOpen(!burgerMenuIsOpen)"
            width="1rem" :prepend-icon="IconBurgerMenu"
        />
      </div>
      <v-container fluid class="h-full w-full py-0 !px-0 !mr-0 hidden md:flex">

        <div class="flex w-full h-full items-center">
          <router-link
              v-for="route in routes"
              :key="route.name"
              :to="{name: route.name}"
              class="h-full flex items-center"
          >
            <BaseButton
                v-if="route.name !== 'contact-me' "
                class="md:!min-w-[90px] md:w-[90px] lg:!min-w-[150px] lg:w-[150px]"
                :is-active="isActive(route.active)"
                :class="route.class"
            >
              {{ route.title }}
            </BaseButton>
          </router-link>
        </div>

        <router-link :to="{name: 'contact-me'}" class="h-full flex items-center">
          <BaseButton class="!border-l !px-2" :is-active="isActive(['contact-me'])">_contact-me</BaseButton>
        </router-link>
      </v-container>

    </div>

    <MobileNavBar
        v-if="burgerMenuIsOpen"
        @close="setBurgerMenuIsOpen(false)"
        :routes="routes"
        :isActive="isActive as () => boolean"
        class="inline md:hidden"
    />

  </header>
</template>

<script setup lang="ts">
import BaseButton from "@/components/layout/BaseButton.vue";
import {useRoute} from "vue-router";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";
import {ref, watch} from "vue";

const route = useRoute();

const routes = [
  {
    title: "_hello",
    name: "home",
    active: ["home"],
    class: "!border-r !border-l md:!border-l-0",
  },
  {
    title: "_about-me",
    name: "about-me",
    active: ["about-me"],
    class: "!border-r",
  },
  {
    title: "_projects",
    name: "projects.index",
    active: ["projects.index", "projects.show"],
    class: "!border-r",
  },
  {
    title: "_contact-me",
    name: "contact-me",
    active: ["contact-me"],
    class: "!border-r",
  },
];

const burgerMenuIsOpen = ref(false);

const setBurgerMenuIsOpen = (value: boolean) => burgerMenuIsOpen.value = value;

const isActive = (routeName: string[]) => {
  return routeName.includes(<string>route.name);
}

watch(() => route.name, () => document.title = 'luka-kurdadze => ' + route.meta.title);
</script>
