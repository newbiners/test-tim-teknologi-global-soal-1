<template>
  <button class="w-16 sm:w-20 sm:h-10 md:w-44 h-7 md:h-14 relative flex items-center justify-center">
    <div
      class="border-2 border-primary rounded-md w-full h-full absolute translate-x-0 sm:translate-x-1 sm:translate-y-1 translate-y-0"
    ></div>
    <div
      class="border-2 border-primary rounded-md w-full h-full absolute -translate-x-0 sm:-translate-x-1 sm:-translate-y-1 -translate-y-0"
    ></div>
    <p class="relative z-10 text-primary font-medium text-[7px] md:text-base">{{ title }}</p>
  </button>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
button div {
  transition: transform 0.2s;
}
button:hover div {
  transform: translate(0, 0);
}
button p {
  z-index: 10;
}
</style>
