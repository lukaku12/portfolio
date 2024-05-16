<template>
  <div class="w-full relative">

    <div class="hidden md:inline w-12 bg-primary-dark-gray absolute text-center text-secondary-blue">
      <template v-if="textLines">
        <p v-for="textLine in textLines" style="line-height: 25px" class="select-none">
          {{ textLine }}
        </p>
      </template>

      <div class="md:pl-[3rem] top-0 left-0 hidden md:inline absolute">
        <template v-if="withComments">
          <p v-for="commentsLine in commentsLines" style="line-height: 25px" class="select-none">
            {{ commentsLine === 1 && commentsLine !== commentsLines ? "&nbsp;/**" : "&nbsp;*" }}
            {{ commentsLine === commentsLines ? "&nbsp;*/" : "" }}
          </p>
        </template>
      </div>

    </div>

    <div class="w-full h-full inline">

      <div
          ref="textRef"
          style="line-height: 25px"
          :class="withComments ? 'md:pl-[6rem]' : 'md:pl-[3rem]' "
          class="w-full pr-1"
      >
        <br v-if="withComments">
        <slot/>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, onUpdated, ref} from "vue";

const {withComments} = defineProps({
  withComments: {
    type: Boolean,
    default: false,
  },
});

const textLines = ref(0);

const textRef = ref<HTMLElement | null>(null);

function countLines() {
  if (!textRef.value) return;

  const el = textRef.value;
  const divHeight = el.offsetHeight;
  const lineHeight = parseInt(window.getComputedStyle(el).lineHeight);
  const lines = divHeight / lineHeight;

  textLines.value = Math.round( withComments ? lines + 2 : lines + 1);
}

const commentsLines = computed(() => textLines.value ? textLines.value - 2 : 0);

onUpdated(countLines)
onMounted(countLines);
onMounted(() => window.addEventListener("resize", countLines));
onUnmounted(() => window.removeEventListener("resize", countLines));

</script>
