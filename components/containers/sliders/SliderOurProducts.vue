<template>
    <main class="flex flex-col items-center justify-cente py-16 md:py-20 relative bg-tertiary">
        <h3 class="text-2xl md:text-4xl">OUR PRODUCTS</h3>
        <section class="flex items-center mt-3 md:mt-7 gap-1 mb-8 md:mb-11">
            <ButtonBoxTwo :title="'ALL'" :status="true"/>
            <ButtonBoxTwo :title="'FURNITURES'"/>
            <ButtonBoxTwo :title="'DECORATION'"/>
            <ButtonBoxTwo :title="'ACCESSORIES'"/>
        </section>
        <section class="flex items-center justify-center gap-2 md:gap-9">
            <ButtonIcon :position="'left'" :class="'md:relative absolute z-40 bottom-3 left-10 md:left-36'"/>
            <ImgProduct v-for="i in 3" :key="i" :discount="'15% OFF'"/>
            <ButtonIcon :position="'right'" :class="'md:relative absolute z-40 bottom-3 right-10 md:right-36'"/>
        </section>
        <section class="flex items-center justify-center gap-2 md:gap-9">
                <TextProduct :class="'w-24  md:w-72'" v-for="i in 3" :key="i"/>
        </section>
    </main>
</template>