<template>
  <VueSlider class="slider"
             :height="6"
             :value="sliderInitialValue" @input="$emit('update:modelValue', $event.target.value)"
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

</template>

<script>
import VueSlider from "vue-slider-component";
import 'vue-slider-component/theme/antd.css'

export default {
  name: "V-Slider",
  components: {
    VueSlider,
  },
  props: {
    currency: {
      type: Object
    },
    sliderInitialValue: {
      type: Number
    }
  },

  computed: {
    priceForYears() {
      const MONTH = 12
      const parseInit = (this.currency.price * MONTH * this.sliderInitialValue).toLocaleString()
      return parseInit.split(' ').join(',')
    }
  },
}
</script>

<style scoped>
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
  .custom-tooltip, .custom-tooltip__bottom {
    text-align: center;
  }
  .custom-tooltip {
    transform: translateY(30px);
  }
  .custom-tooltip__bottom {
    transform: translateY(60px);
  }
</style>