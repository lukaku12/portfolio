<template>
  <router-view v-slot="slotProps">
    <AppWrapper>
      <component :is="slotProps.Component"/>
    </AppWrapper>
  </router-view>
</template>

<script setup lang="ts">
import AppWrapper from "@/components/layout/AppWrapper.vue";
</script>

<style>
/*style scroll bar */
::-webkit-scrollbar {
  width: 7px;
  border-radius: 7px;
}

::-webkit-scrollbar-track {
  background: #607B96;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb {
  background: #01080E;
  border-radius: 7px;
  border: 1px solid #003967;
}

::-webkit-scrollbar-thumb:hover {
  background: #011627;
}


</style>
