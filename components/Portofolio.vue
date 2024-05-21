<!-- <template>
    <main class="w-full flex items-center justify-center p-48 relative">
        <span class="overley"/>
        <div>
            <h1 class="text-4xl text-center mb-28">AWESOME PORTOFOLIO</h1>
            <section class="grid grid-rows-2 grid-cols-3  bg-secondary">
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
.overlay::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 10%;
height: 10%;
background-color: rgba(0, 0, 0, 0.5);
}
.overley {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style> -->

<template>
    <main class="w-full flex items-center justify-center p-48 relative">
      <span class="overlay"></span>
      <div class="relative z-10">
        <h1 class="text-4xl text-center mb-28">AWESOME PORTOFOLIO</h1>
        <section class="grid grid-rows-2 grid-cols-3">
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
  