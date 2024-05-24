<template>
    <main class="h-[35rem] relative md:h-screen w-full bg-primary flex items-center justify-center overflow-hidden">
      <ImgMasterCarosel 
        v-for="(url, i) in data" 
        :key="i" 
        :url="url" 
        :class="[int === i ? 'opacity-100 transition-all' : 'opacity-0 transition-all']"
      />
      <div class="absolute flex items-center justify-center gap-3 md:gap-28">
        <ButtonIcon :position="'left'" :class="'md:relative absolute bottom-0 left-10'" @click="btnBackHandler"/>
        <TextMasterCarosel />
        <ButtonIcon :position="'right'" :class="'md:relative absolute bottom-0 right-10'" @click="btnNextHandler"/>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const int = ref(0);
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  
  const btnNextHandler = () => {
    int.value = int.value < props.data.length - 1 ? int.value + 1 : 0;
  }

  const btnBackHandler = () => {
    int.value = int.value > 0 ? int.value - 1 : props.data.length - 1;
  }
  </script>
  