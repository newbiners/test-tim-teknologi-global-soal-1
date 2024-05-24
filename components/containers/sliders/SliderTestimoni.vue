<template>
    <main class="flex flex-col md:flex-row w-full items-center justify-center gap-10 md:gap-32 mb-28 pt-14 overflow-hidden">
        <div class="flex flex-col items-center w-10/12 md:w-2/5 2xl:w-1/4">
            <h1 class="text-3xl lg:text-4xl font-medium">WHAT PEOPLE SAYING</h1>
            <SvgQuotetion/>
            <div class="mb-8">
                <Icon name="material-symbols:kid-star" class="text-2xl text-primary" v-for="i in 5" :key="i"/>
            </div>
            <div class=" w-full mt-2 h-72 flex items-center justify-center relative">
                <TextBoxTestomoni v-for="(data ,i) in data" :key="i" :data="data" :class="['absolute  w-full' + (int === i ? ' opacity-100 transition-all' : ' opacity-0 transition-all')]" :btnNext="btnNextHandler" :btnBack="btnBackHandler"/>
            </div>
        </div>
        <div class="w-72 h-96">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JoyKXJdWKOE">
            </iframe>
        </div>
    </main>
</template>
<script setup>
import { ref } from 'vue';
const int = ref(0)
const props = defineProps({
  data: {
    type: Array,
    required: true
  }  

})
const btnBackHandler = () => {
  int.value = int.value > 0 ? int.value - 1 : props.data.length - 1;
}
const btnNextHandler = () => {
  int.value = int.value < props.data.length - 1 ? int.value + 1 : 0;
}

</script>
