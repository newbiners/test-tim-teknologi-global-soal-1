<template>
    <main class="flex flex-col items-center w-1/4">
        <h1 class="text-4xl font-medium">WHAT PEOPLE SAYING</h1>
        <SvgQuotetion/>
        <div class="mb-8">
            <Icon name="material-symbols:kid-star" class="text-2xl text-primary" v-for="i in 5" :key="i"/>
        </div>
        <p class="text-center text-xl italic">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, placeat, nisi consequatur eveniet reiciendis tenetur inventore maxime distinctio molestias corrupti rem labore totam. In voluptates ratione sapiente, officia molestiae cupiditate!. "</p>
        <div class="flex items-center justify-between w-10/12 mt-9">
            <ButtonIcon :position="'left'"/>
            <ProfileTestimoni/>
           <ButtonIcon :position="'right'"/>
        </div>
    </main>
</template>
<script setup>
import SvgQuotetion from '../assets/icons/SvgQuotetion.vue'
</script>