<template>
    <button v-if="solid === false" :class="[status ? 'text-primary font-medium text-sm md:text-xl px-2 md:px-4 h-10 relative flex items-center justify-center border-2 border-primary' : 'px-1 md:px-2 h-8 relative flex items-center justify-center text-sm md:text-xl' ]">
        {{ title }}
    </button>
    <button v-else class="text-secondary font-bold text-sm md:text-xl px-2 rounded-md md:px-4 h-10 relative flex items-center justify-center bg-primary">
        {{ title }}
    </button>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    solid: {
        type : Boolean,
        default: false
    }
})
</script>
