<template>
  <header
    class="bg-secondary w-screen flex items-center gap-24 md:gap-2 xl:gap-32 justify-around md:justify-center fixed z-50"
  >
    <img src="~/assets/images/logo.png" alt="logo" width="200" class="w-28 md:w-48"/>
    <div
      class="md:relative absolute w-full top-0  md:h-auto md:w-auto pt-14 pb-5 md:pt-0 md:pb-0 bg-white md:bg-secondary sm:shadow-none shadow-2xl"
      :class="[isAct ? 'hidden md:block': 'block']"
    >
      <button class="z-50 absolute block md:hidden top-0 right-0 p-12" @click="toggleMenu">
        <icon name="material-symbols:close" class="text-secondary text-4xl" />
      </button>
      <ul
        class="flex md:flex-row flex-col items-center justify-center text-secondary md:text-white gap-10 w-full xl:gap-20 text-base lg:text-xl"
      >
        <li><NuxtLink to="/">HOME</NuxtLink></li>
        <li><NuxtLink to="/#">ABOUT</NuxtLink></li>
        <li><NuxtLink to="/#">SERVICES</NuxtLink></li>
        <li><NuxtLink to="/#">PORTOFOLIO</NuxtLink></li>
        <li><NuxtLink to="/#">CONTANCT</NuxtLink></li>
      </ul>
    </div>
    <div class="flex gap-10 items-center">
      <icon
        name="streamline:interface-search-glass-search-magnifying"
        class="text-white text-2xl"
      />
      <button class="block md:hidden" @click="toggleMenu">
        <icon name="material-symbols:menu" class="text-white text-4xl" />
      </button>
    </div>
  </header>
</template>
<script setup>
const isAct = ref(true)

const toggleMenu = () => {
  isAct.value = !isAct.value
}
</script>