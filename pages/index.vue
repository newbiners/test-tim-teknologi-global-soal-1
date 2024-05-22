<template>
    <main>
      <MasterCarosel/>
        <AboutCompany/>
        <WorkingAreasContainer/>
        <SliderOurProducts/>
        <SliderTestimoni/>
        <Portofolio :data="data"/>
        <Map/>
    </main>
</template>
<script setup>

const data = ref([
  '/img/porto-1.jpg',
  '/img/porto-2.jpg',
  '/img/porto-3.jpg',
  '/img/porto-4.jpg',
  '/img/porto-5.jpg',
  '/img/porto-6.jpg',
]);
</script>
