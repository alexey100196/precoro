<template>
  <main class="main">
    <div class="side-bar">
      <h1 class="p-Header-2 title">Estimate your <br>investment</h1>
      <p class="p-title plans-title">All plans include:</p>
      <ul>
        <li v-for="(plan, index) in plans" class="p-body-2" :key="index">
          <img :src="svg.planCheck" alt="plan-check" class="plan-check"/> {{plan}}
        </li>
      </ul>
      <div class="p-button plans-btn">See all features</div>
    </div>
    <div>
    <h1 class="p-Header-2 mobile-title">Estimate your <br>investment</h1>
    <p class="p-tag mobile-desc">How many users?</p>
    <Currency @handleCur="getCurrency" :handleCur="handleCur"/>
    <VueSlider class="slider"
      :height="6"
      v-model="sliderInitialValue"
      :marks="{
        '0': 0,
        '20': 20,
        '40': '∞'
      }"
      :step-style="{
        backgroundColor: '#ffffff',
        height: '6px',
        width: '3px',
        border: 'none',
        borderRadius: 'inherit',
        boxShadow: 'none',
      }"
      :labelActiveStyle="{
        display: 'none',
      }"
      :stepActiveStyle="{
        border: 'none',
      }"
      :max="40"
      :min="1"
      :tooltip-formatter="`${sliderInitialValue} ${sliderInitialValue <= 1 ? `user` : 'users'}`"
      tooltip="always"
      :dotStyle="{
        backgroundColor: '#4545F5'
      }"
      :railStyle="{
        backgroundColor:' #DDDEE5'
      }"
      :process-style="{
        backgroundColor: '#4545F5'
      }"
      :dot-options="{
        style: {
          border: 'none',
          boxShadow: 'none',
          backgroundColor: '#4545F5'
        },
        focusStyle: {
          border: 'none',
        }
      }"
      dotSize="20"
    >
      <template v-slot:tooltip="{ value, focus }">
        <div :class="['custom-tooltip', 'p-body-2', { focus }]">{{value}} {{ value <= 1 ? `user` : 'users' }}</div>
        <div :class="['custom-tooltip__bottom', 'p-small-title' ]">${{ priceForYears }}/year</div>
      </template>
    </VueSlider>
      <div class="plan-cards-wrap">
        <PlanCard
          :isActive="sliderInitialValue <= 20"
          title="For smaller teams"
          conditionSpan="with ≤20 users"
          :priceSpan="currency.price"
          :description="`per user per month
      billed annually`"
          :img="svg.planCard20"
          :smaller="true"
          btnName="Get Started"/>
        <PlanCard
          :isActive="sliderInitialValue > 20"
          title="For larger teams"
          conditionSpan="with >20 users"
          priceSpan="Individually tailored pricing"
          description="billed annually"
          :img="svg.planCard21"
          :smaller="false"
          btnName="Get a Custom Quote"/>
      </div>
    </div>
    <ul class="plans-list">
      <li v-for="(plan, index) in plans" class="p-body-2" :key="index">
        <img :src="svg.planCheck" alt="plan-check" class="plan-check"/> {{plan}}
      </li>
      <div class="p-button plans-btn">See all features
        <img :src="textBtnArrow" alt="arrow" class="arrow-text-btn"/>
      </div>
    </ul>
  </main>
</template>

<script>
import { reactive, toRefs } from 'vue'
import VueSlider from 'vue-slider-component'
import PlanCard from '@/components/Plans/PlanCard'
import Currency from '@/components/Plans/Currency'
import 'vue-slider-component/theme/antd.css'
import planCheck from "@/assets/images/plan-check.svg"
import planCard20 from "@/assets/images/plan-card<20.svg"
import planCard21 from "@/assets/images/plan-card>20.svg"
import textBtnArrow from "@/assets/images/arrow-text-btn.png"

export default {
  components: {
    VueSlider,
    PlanCard,
    Currency
  },
  data() {
    return {
      currency: {},
      user: 'user',
      svg: {
        planCheck,
        planCard20,
        planCard21,
      },
      textBtnArrow,
      handleCur: 1,
      plans: [
          'Direct integration with QuickBooks or Xero',
          'Unlimited custom fields & workflows',
          'Standard onboarding and support',
          'Multi-departments / projects',
          'Unlimited document storage',
          'Amazon Business Punch-in',
          'Multi-currencies ',
          'Lifetime updates',
          '3-way matching ',
          'Multi-locations',
          'Budgets',
      ],
    }
  },
  computed: {
    priceForYears() {
      const MONTH = 12
      const parseInit = (this.currency.price * MONTH * this.sliderInitialValue).toLocaleString()
      return parseInit.split(' ').join(',')
    }
  },
  methods: {
    getCurrency(cur) {
      this.currency.price = cur.price
      this.handleCur = cur.id
    }
  },
  setup() {
    const data = reactive({ sliderInitialValue: 1 })
    return toRefs(data)
  },
  created() {
    this.currency.price = 35
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 960px) {
    .main {
      flex-direction: row;
    }
  }
  .side-bar {
    margin-right: 92px;
    display: none;
  }
  @media screen and (min-width: 960px) {
    .side-bar {
      display: block;
    }
  }
  .plan-cards-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 960px) {
    .plan-cards-wrap {
      flex-direction: row;
      align-items: start;
    }
  }
  .title {
    margin-bottom: 127px;
    font-size: 32px;
    line-height: 40px;
    text-align: start;
  }
  .plans-btn {
    margin-top: 24px;
    color: #4545F5;
    display: flex;
    align-items: center;
  }
  .mobile-title {
    margin-bottom: 24px;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
  }
  @media screen and (min-width: 960px) {
    .mobile-title {
      display: none;
    }
  }
  .plans-list {
    margin: 32px auto 0px;
  }
  @media screen and (min-width: 960px) {
    .plans-list {
      display: none;
    }
  }
  .mobile-desc {
    text-align: center;
    color: #676F8F;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 960px) {
    .mobile-desc {
      display: none;
    }
  }
  .plans-title {
    margin-bottom: 24px;
  }
  .slider {
    margin-bottom: 96px;
    display: none;
  }
  @media screen and (min-width: 960px) {
    .slider {
      flex-direction: row;
      display: block;
    }
  }
  .custom-tooltip, custom-tooltip__bottom {
    text-align: center;
  }
  .custom-tooltip {
    transform: translateY(30px);
  }
  .custom-tooltip__bottom {
    transform: translateY(60px);
  }
  li {
    margin-bottom: 12px;
  }
  .plan-check {
    margin-right: 15px;
  }
  .arrow-text-btn {
    margin-left: 12px;
  }
</style>
