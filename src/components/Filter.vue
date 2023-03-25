<template>
  <div class="filter-wrap">
    <swiper-container
        :slidesPerView="'auto'"
        :slidesOffsetAfter="0"
        :navigation="true"
        :freeMode="false"
        :breakpointsBase="'container'"
        :slidesOffsetBefore="40"
        :observer="true"
        :observeParents="true"
        :breakpoints="{
          960: {
            slidesPerGroup: 2,
            slidesOffsetAfter: 50,
          }
        }"
        class="swiper-filter-container"
    >
      <swiper-slide class="filter__item p-body-2"
          v-for="category in categories"
          :key="category.id"
          :class="category.id === id ? 'isActive' : ''"
          @click="$emit('selectByCat', category)">
          {{category.category}}
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>


export default {
  name: "V-Filter",
  props: {
    categories: {
      type: Array
    },
    id: {
      type: Number,
      default: 1
    }
  },
}
</script>

<style scoped>
  .isActive {
    color: #4545F5!important;
  }
  .filter-wrap {
    position: relative;
    margin: 0 auto 33px;
    max-width: 296px;
  }
  @media screen and (min-width: 960px) {
    .filter-wrap {
      max-width: 100%;
      margin: 0 auto 38px;
    }
  }
  .swiper-filter-container:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: block;
    height: 40px;
    width: 80px;
    background-image: linear-gradient(to right, rgba(255,0,0,0) 0%, rgba(255,255,255,0.9) 40%);
  }
  .filter__item {
    color: #676F8F;
    cursor: pointer;
    margin-right: 24px;
    white-space: nowrap;
  }
  .filter__item:hover {
    color: #4545F5;
  }
  .filter__item:last-child{
    margin-right: 0;
  }
  .filter__item {
    display: inline-flex;
    justify-content: start;
    width: 10%;
  }
  .filter__item:nth-child(1){
    width: 18px;
    margin-right: 48px;
  }
  .filter__item:nth-child(1):after {
    content: '|';
    color: #D9DBE3;
    padding-left: 24px;
  }
  .filter__item:nth-child(2){
    width: 36px;
  }
  .filter__item:nth-child(3){
    width: 79px;
    margin-right: 48px;
  }
  .filter__item:nth-child(3):after {
    content: '|';
    color: #D9DBE3;
    padding-left: 24px;
  }
  .filter__item:nth-child(4){
    width: 59px;
  }
  .filter__item:nth-child(5){
    width: 226px;
  }
  .filter__item:nth-child(6){
    width: 76px;
  }
  .filter__item:nth-child(7){
    width: 163px;
  }
  .filter__item:nth-child(8){
    width: 181px;
  }
</style>