<template>
    <main>
        <button v-if="position === 'left'" class="h-6 w-6 md:h-11 md:w-11 bg-primary/35 flex items-center justify-center border-y-2 border-l-2 border-primary">
            <Icon name="material-symbols:arrow-back-ios" class="text-primary"/>
        </button>
        <button v-else class="h-6 w-6 md:h-11 md:w-11 bg-primary/35 flex items-center justify-center border-y-2 border-r-2 border-primary">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-primary"/>
        </button>
    </main>
</template>

<script setup>
const props = defineProps({
    position: {
        type: String,
        required: true,
        validator: value => ['left', 'right'].includes(value),
    },
});
</script>
