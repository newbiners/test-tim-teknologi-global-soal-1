<template>
    <main class="flex flex-col items-center justify-center py-16 md:py-20 relative bg-tertiary">
      <h3 class="text-2xl md:text-4xl">OUR PRODUCTS</h3>
      <section class="flex items-center mt-3 md:mt-7 gap-1 mb-8 md:mb-11">
        <ButtonBoxTwo :title="'ALL'" :status="true"/>
        <ButtonBoxTwo :title="'FURNITURES'"/>
        <ButtonBoxTwo :title="'DECORATION'"/>
        <ButtonBoxTwo :title="'ACCESSORIES'"/>
      </section>
      <section class="flex items-center justify-center gap-2 md:gap-9">
        <ButtonIcon 
          :position="'left'" 
          :class="'lg:static absolute z-40 bottom-3 left-20 md:left-36'" 
          @click="btnBackHandler"
        />
        <ImgProduct 
          v-for="(url, i) in dataToShow" 
          :key="i" 
          :discount="'15% OFF'" 
          :url="url"
        />
        <ButtonIcon 
          :position="'right'" 
          :class="'lg:static absolute z-40 bottom-3 right-20 md:right-36'" 
          @click="btnNextHandler"
        />
      </section>
      <section class="flex items-center justify-center gap-2 md:gap-9">
        <TextProduct 
          :class="'w-24 sm:w-48 md:w-60'" 
          v-for="i in 3" 
          :key="i"
        />
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const dataAct = ref([0, 3]);
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  
  const dataToShow = computed(() => props.data.slice(dataAct.value[0], dataAct.value[1]));
  
  const btnBackHandler = () => {
    if (dataAct.value[0] > 0) {
      dataAct.value[0] -= 1;
      dataAct.value[1] -= 1;
    } else {
      dataAct.value[0] = props.data.length - 3;
      dataAct.value[1] = props.data.length;
    }
  };
  
  const btnNextHandler = () => {
    if (dataAct.value[1] < props.data.length) {
      dataAct.value[0] += 1;
      dataAct.value[1] += 1;
    } else {
      dataAct.value[0] = 0;
      dataAct.value[1] = 3;
    }
  };
  </script>
  