<template>
    <button :class="[status ? 'text-primary font-medium text-xl px-4 h-10 relative flex items-center justify-center border-2 border-primary' : 'px-2 h-8 relative flex items-center justify-center text-xl' ]">
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
    }
})
</script>
