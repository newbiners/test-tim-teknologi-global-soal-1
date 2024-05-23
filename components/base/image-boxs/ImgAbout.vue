<template>
  <main class="relative">
    <section class="mask1 absolute -translate-y-28 -translate-x-20 md:-translate-x-52 z-30">
      <div
        class="h-[62rem] w-[80rem] bg-secondary img-object bottom-0 right-0 object-cover -translate-x-[38rem] md:-translate-x-[30rem] -translate-y-64 md:-translate-y-52"
      />
    </section>
    <section class="h-80 w-full md:h-[40rem]  md:w-[30rem] overflow-hidden translate-y-0 md:translate-y-12">
      <div
        class="h-[62rem] w-[80rem] bg-secondary img-background -translate-x-[30rem] -translate-y-[23rem]"
      />
    </section>
  </main>
</template>

<style scoped>
.mask1 {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-mask-image: url("/img/M-logo.png");
  mask-image: url("/img/M-logo.png");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 350px;
  mask-size: 350px;
}

.img-background {
  background-image: url("/img/porto-3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
}

.img-object {
  background-image: url("/img/porto-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  filter: brightness(70%)
}
@media only screen and (max-width: 600px) {
  .mask1 {
    -webkit-mask-size: 250px;
    mask-size: 250px;
  }
}

</style>
