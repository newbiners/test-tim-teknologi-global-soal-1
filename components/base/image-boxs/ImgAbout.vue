<template>
  <div class="relative">
    <div class="mask1 absolute -translate-y-28 -translate-x-52 z-30">
      <div
        class="h-[62rem] w-[80rem] bg-secondary img-object bottom-0 right-0 object-cover -translate-x-[30rem] -translate-y-52"
      />
    </div>
    <div class="h-[40rem] w-[30rem] overflow-hidden translate-y-12">
      <div
        class="h-[62rem] w-[80rem] bg-secondary img-background -translate-x-[30rem] -translate-y-[23rem]"
      />
    </div>
  </div>
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
</style>
