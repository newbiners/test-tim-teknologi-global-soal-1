<template>
    <main class="mb-48 overflow-hidden">
        <div>
            <h2 class="py-11 md:py-24 text-white text-3xl md:text-5xl text-center">WORKING AREAS</h2>
            <section class=" flex gap-5 md:gap-14 justify-center ">
                <img src="/img/porto-1.jpg" class="w-24 h-24 md:w-80 md:h-80 object-cover"/>
                <img src="/img/porto-4.jpg" class="w-24 h-24 md:w-80 md:h-80 object-cover"/>
                <img src="/img/porto-5.jpg" class="w-24 h-24 md:w-80 md:h-80 object-cover"/>
            </section>
        </div>
        <section class=" flex gap-5 md:gap-14 justify-center ">
            <TextWorkingArea/>
            <TextWorkingArea/>
            <TextWorkingArea/>
        </section>
    </main>
</template>
<style scoped>
div {
    background-image: url('/img/background.jpg');
}
</style>