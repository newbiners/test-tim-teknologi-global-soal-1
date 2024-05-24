<template>
    <span class=" flex flex-col items-center">
      <p class="text-center text-xl italic">{{ data.text }}</p>
      <div class="flex items-center justify-between w-10/12 mt-9">
        <ButtonIcon position="left" @click="btnBack"/>
        <ProfileTestimoni :name="data.name" :job="data.job" :url="data.url" />
        <ButtonIcon position="right" @click="btnNext"/>
      </div>
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.name === 'string' &&
          typeof value.url === 'string' &&
          typeof value.text === 'string' &&
          typeof value.job === 'string' 
        );
      },
    },
    btnNext: {
      type: Function,
      required: true,
    },
    btnBack: {
      type: Function,
      required: true,
    }
  });
  </script>
  