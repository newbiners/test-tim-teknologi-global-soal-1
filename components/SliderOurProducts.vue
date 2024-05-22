<template>
    <main class="flex flex-col items-center justify-cente py-20 bg-tertiary">
        <h3 class="text-4xl">OUR PRODUCTS</h3>
        <section class="flex items-center mt-7 mb-11">
            <ButtonBoxTwo :title="'ALL'" :status="true"/>
            <ButtonBoxTwo :title="'FURNITURES'"/>
            <ButtonBoxTwo :title="'DECORATION'"/>
            <ButtonBoxTwo :title="'ACCESSORIES'"/>
        </section>
        <section class="flex items-center justify-center gap-9">
            <ButtonIcon :position="'left'"/>
            <ImgProduct v-for="i in 3" :key="i" :discount="'15% OFF'"/>
            <ButtonIcon :position="'right'"/>
        </section>
        <section class="flex items-center justify-center gap-9">
            <main class="w-72" v-for="i in 3" :key="i">
                <TextProduct />
            </main>
        </section>
    </main>
</template>