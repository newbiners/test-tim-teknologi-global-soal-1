<template>
    <main class="h-screen w-full bg-primary flex items-center justify-center">
        <ImgMasterCarosel/>
        <div class="absolute flex items-center justify-center gap-28">
            <ButtonIcon :position="'left'"/>
            <TextMasterCarosel />
            <ButtonIcon :position="'right'"/>
        </div>
    </main>
</template>