<template>
    <main class="w-full h-full relative">
        <img src="/img/porto-1.jpg" class="w-full h-full object-cover"/>
    </main>
</template>
<style scoped>
main::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 60%;
    background-color: #FFFF;
    clip-path: polygon(0% 88%,93% 89%,100% 100%,0% 100%);
    transform: translateY(0.1%);
}
main::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    height: 10%;
    background-color: #FFFF;
    clip-path: polygon(100% 23%,0% 100%,100% 100%);
    transform: translateY(0.1%);
}


</style>