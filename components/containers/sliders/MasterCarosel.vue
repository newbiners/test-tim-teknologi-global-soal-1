<template>
    <main class="h-[35rem] relative md:h-screen w-full bg-primary flex items-center justify-center overflow-hidden">
        <ImgMasterCarosel/>
        <div class="absolute flex items-center justify-center gap-3 md:gap-28">
            <ButtonIcon :position="'left'" :class="'md:relative absolute bottom-0 left-10'"/>
            <TextMasterCarosel />
            <ButtonIcon :position="'right'" :class="'md:relative absolute bottom-0 right-10'"/>
        </div>
    </main>
</template>