<template>
  <article :style="!isActive ?  'opacity: .55' : ''" class="plan-card">
    <h3 class="p-title plan-card__title">
      {{ title }}
    </h3>
    <h4 class="p-small-title plan-card__condition">
      {{ conditionSpan }}
    </h4>
    <h2 :class="[`p-Header-${!smaller ? 3 : 1}`, 'plan-card__price']">
      {{!smaller ? '' : '$'}}{{ priceSpan }}
    </h2>
    <pre class="p-body-2 plan-card__desc">
      {{ description }}
    </pre>
    <PlanButton :name="btnName" :isDisable="isActive"/>
    <img :src="img" alt="plan-card-svg" class="image"/>
  </article>
</template>

<script>
import PlanButton from "@/components/Plans/PlanButton";
export default {
  name: "Plan-card",
  components: {
    PlanButton
  },
  props: {
    isActive: {
      type: Boolean
    },
    title: {
      type: String
    },
    conditionSpan: {
      type: String
    },
    priceSpan: {
      type: String || Number
    },
    description: {
      type: String
    },
    img: {
      type: String
    },
    smaller: {
      type: Boolean
    },
    btnName: {
      type: String
    }
  }
}
</script>

<style scoped>
  .plan-card {
    text-align: center;
    width: 310px;
    height: 524px;
    background: #F7F9FC;
    border-radius: 8px;
    padding: 32px 24px;
    transition: opacity 0.3s linear;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 960px) {
    .plan-card {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
  .plan-card__title {
    margin-bottom: 4px;
  }
  .plan-card__condition {
    margin-bottom: 24px;
  }
  .plan-card__price {
    margin-bottom: 12px;
  }
  .plan-card__desc {
    margin-bottom: 40px;
    text-align: center;
  }
  .image {
    display: block;
    margin: 0 auto;
  }
</style>