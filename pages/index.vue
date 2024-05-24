<template>
    <main>
      <MasterCarosel :data="data"/>
        <AboutCompany/>
        <WorkingAreasContainer/>
        <SliderOurProducts :data="data"/>
        <SliderTestimoni :data="dataTestimoni"/>
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

const dataTestimoni = ref([
  {
    name: 'John Doe',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat urna ac justo aliquam, quis egestas ligula suscipit. ",
    job: 'Designer',
    url: '/img/photo-profile.jpg',
  },
  {
    name: 'Alexandra',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat urna ac justo aliquam, quis egestas ligula suscipit.",
    job: 'Programmer',
    url: '/img/photo-profile2.jpg',
  },
])
</script>
