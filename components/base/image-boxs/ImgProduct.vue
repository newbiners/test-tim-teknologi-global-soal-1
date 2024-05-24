<template>
    <span>
        <section class="h-36 w-24 sm:h-56 sm:w-48  md:h-72 relative overflow-hidden bg-secondary container md:w-60" :data-discount="discount">
            <img :src="url" class="w-full cursor-pointer h-full object-cover" />
            <div class="h-11 w-full absolute z-30 overlay bottom-0 flex items-center justify-center gap-3 cursor-pointer text-white">
                <Icon name="oui:eye" class="text-xl md:text-2xl"/>
                <p class="font-medium text-xs md:text-base">QUICK-VIEW</p>
            </div>
        </section>
    </span>
</template>
<script setup>
const props = defineProps({
    discount: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    }
})
</script>
<style scoped>
.container::after {
    content: attr(data-discount);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 80%;
    background-color: #6DBE45;
    display: flex;
    align-items: end;
    justify-content: center;
    transform: rotate(45deg) translate(-5%, -80%);
    font-size: 10px;
    color: white;
    padding-bottom: 5px;
}


.overlay {
    transition: opacity 0.3s, bottom 0.3s;
    background-color: #6DBE45;
    bottom: -100%;
    opacity: 0;
}

.container:hover .overlay {
    bottom: 0;
    opacity: 1;
}
@media only screen and (min-width: 640px) {
    .container::after {
        font-size: 14px;
        transform: rotate(45deg) translate(-0%, -90%);
    }
}
</style>