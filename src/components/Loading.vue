<template>
  <div
      class="loader border-[4px] border-lines-gray border-t-[4px]
      border-t-secondary-blue absolute top-[calc(50%-15px)] left-[calc(50%-15px)]
       "></div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.loader {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 1.5s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>