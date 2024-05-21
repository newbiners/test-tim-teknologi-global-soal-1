<template>
  <button class="w-44 h-14 relative flex items-center justify-center">
    <div
      class="border-2 border-primary rounded-md w-full h-full absolute translate-x-1 translate-y-1"
    ></div>
    <div
      class="border-2 border-primary rounded-md w-full h-full absolute -translate-x-1 -translate-y-1"
    ></div>
    <p class="relative z-10 text-primary font-medium">{{ title }}</p>
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
