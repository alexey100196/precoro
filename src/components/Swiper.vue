<template>
  <swiper-container navigation="true">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper-container>
</template>

<script>
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
export default {
  name: "V-Swiper",
  setup() {
    register();
    // new Swiper('.swiper', {
    //   slidesPerView: 3,
    //   grid: {
    //     rows: 3,
    //   },
    //   mousewheel: {
    //     forceToAxis: true,
    //   },
    // })
  }
}
</script>

<style scoped >

</style>