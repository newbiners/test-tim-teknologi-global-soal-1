<template>
    <main class="w-full flex items-center justify-center p-3 lg:p-48 relative overflow-hidden h-full">
      <span class="overlay"></span>
      <div class="relative z-10">
        <h1 class="text-2xl md:text-4xl text-center mb-9 md:mb-28">AWESOME PORTOFOLIO</h1>
        <section class="grid grid-rows-2 grid-cols-2 xl:grid-cols-3">
          <ImagePorto v-for="(url, index) in props.data" :key="index" :url="url" />
        </section>
      </div>
    </main>
  </template>
  
  <script setup>
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    }
  })
  </script>
  
  <style scoped>

  main::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 50%;
    opacity: 20%;
    background-color: #6DBE45;
  }

  main::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 50%;
    opacity: 20%;
    background-color: #6DBE45;
  }
  </style>
  