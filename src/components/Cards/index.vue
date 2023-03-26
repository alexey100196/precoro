<template>
  <main class="main">
    <Filter @selectByCat="filterByCat" :categories="categories" :id="id"/>
    <Cards :cards="this.data"/>
  </main>

  <div class="card-wrap">
    <div class="swiper-button-prev" />
    <swiper-container
        class="swiper-container"
        :allowTouchMove="false"
        :observer="true"
        :observeParents="true"
        :navigation=" {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
        :pagination="{
        el: '.swiper-pagination',
        type: 'fraction',
      }"
        :centeredSlides="true"
        :slidesPerView="1"
        :slidesPerGroup="1"
        :observeSlideChildren="true"
        :grid="{
          fill: 'row',
          rows: 2,
        }"
        :breakpoints="{
          960: {
            allowTouchMove: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
            grid: {
              rows: 1
            }
          }
        }"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <Card :info="card"/>
      </swiper-slide>
    </swiper-container>
    <div class="swiper-button-next" />
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import Card from "@/components/Cards/Card"

export default {
  name: "V-cards",
  props: {
    cards: {
      type: Array
    }
  },
  components: {
    Card
  },
}
</script>

<style scoped>
   .card-wrap {
     position: relative;
   }
   .swiper-container {
     display: flex;
     flex-direction: column;
   }
  .swiper-pagination {
    bottom: -45px;
  }
   @media screen and (min-width: 960px) {
     .swiper-pagination {
       bottom: -72px;
     }
   }
  .swiper-button-prev,
  .swiper-button-next {
    color: #4545F5;
    top: 1128px;
    z-index: 100;
  }
   @media screen and (min-width: 960px) {
     .swiper-button-prev,
     .swiper-button-next {
       top: 577px;
     }
   }
  .swiper-button-prev {
    left: 25px
  }
   @media screen and (min-width: 480px) {
     .swiper-button-prev {
       left: 145px
     }
   }
   @media screen and (min-width: 875px) {
     .swiper-button-prev {
       left: 305px
     }
   }
   @media screen and (min-width: 1080px) {
     .swiper-button-prev {
       left: 400px
     }
   }
  .swiper-button-next {
    right: 25px
  }
   @media screen and (min-width: 480px) {
     .swiper-button-next {
       right: 145px
     }
   }
   @media screen and (min-width: 875px) {
     .swiper-button-next {
       right: 305px
     }
   }
   @media screen and (min-width: 1080px) {
     .swiper-button-next {
       right: 400px
     }
   }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px;
  }
</style>