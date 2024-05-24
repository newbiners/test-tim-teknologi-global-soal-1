<!-- <template>
    <span class="flex flex-col justify-center items-center">
        <img :src="url" class="h-20 rounded-full w-20 object-cover mb-2" alt="photo-profile"/>
        <h3 class="text-base md:text-xl font-medium text-primary">{{ name }}</h3>
        <p class="text-sm md:text-base">{{job}}</p>
    </span>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});
</script> -->

<template>
    <span class="flex flex-col justify-center items-center">
      <img :src="url" class="h-20 rounded-full w-20 object-cover mb-2" alt="photo-profile"/>
      <h3 class="text-base md:text-xl font-medium text-primary">{{ name }}</h3>
      <p class="text-sm md:text-base">{{ job }}</p>
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  });
  </script>
  