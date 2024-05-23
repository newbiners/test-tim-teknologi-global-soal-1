<template>
    <main class="flex flex-col items-center w-full md:w-1/4 mx-4 md:mx-0">
        <h1 class="text-2xl md:text-4xl font-medium">WHAT PEOPLE SAYING</h1>
        <SvgQuotetion/>
        <div class="mb-8">
            <Icon name="material-symbols:kid-star" class="text-xl md:text-2xl text-primary" v-for="i in 5" :key="i"/>
        </div>
        <p class="text-center text-base mx-5 md:mx-0 md:text-xl italic">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, placeat, nisi consequatur eveniet reiciendis tenetur inventore maxime distinctio molestias corrupti rem labore totam. In voluptates ratione sapiente, officia molestiae cupiditate!. "</p>
        <div class="flex items-center justify-between w-10/12 mt-9">
            <ButtonIcon :position="'left'"/>
            <ProfileTestimoni/>
           <ButtonIcon :position="'right'"/>
        </div>
    </main>
</template>
