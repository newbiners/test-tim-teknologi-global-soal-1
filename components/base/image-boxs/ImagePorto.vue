   <template>
    <span class="w-full md:w-96 cursor-pointer h-36 md:h-96 bg-secondary relative flex items-center justify-center transition-all">
      <img :src="url" alt="portfolio" class="w-full h-full brightness-75 object-cover"/>
      <p class="text-2xl md:text-4xl text-white  absolute z-10 ">VIEW</p>
      <div class="h-32 w-32 md:h-80 md:w-80 absolute bg-primary overlay"/>
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    url: {
      type: String,
      required: true,
    }
  })
  </script>
  
  <style scoped>
  p {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .overlay {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  span:hover .overlay {
    opacity: 0.4;
  }
  
  span:hover p {
    opacity: 1;
  }
  </style>
  