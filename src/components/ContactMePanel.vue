<template>
  <BaseExpansionPanel :active="active" title="contacts" value="contacts">
    <div class="!text-secondary-blue flex items-center gap-x-1">
      <v-icon :icon="IconEmail"/>
      <span><a href="mailto:lukakurdadze2@gmail.com">lukakurdadze2@gmail.com</a></span>
    </div>
    <div class="!text-secondary-blue flex items-center mt-3 gap-x-1">
      <v-icon :icon="IconPhone"/>
      <span><a href="tel:+995-599-93-92-04">(+995) 599-93-92-04</a></span>
    </div>
  </BaseExpansionPanel>
</template>

<script setup lang="ts">
import IconEmail from "@/components/icons/contact/IconEmail.vue";
import IconPhone from "@/components/icons/contact/IconPhone.vue";
import BaseExpansionPanel from "@/components/BaseExpansionPanel.vue";

defineProps({
  active: {
    type: Boolean,
    required: true
  }
});
</script>