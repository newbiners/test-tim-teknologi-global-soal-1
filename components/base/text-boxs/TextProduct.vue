<template>
    <main class="flex flex-col items-center ">
        <h3 class="text-center text-sm sm:text-lg font-medium md:text-xl">product name</h3>
        <div class="text-primary">
            <Icon name="material-symbols:star-rate-outline" v-for="i in 5" :key="i" class="text-xs md:text-2xl"/>
        </div>
        <p>$ 202.00</p>
    </main>
</template>