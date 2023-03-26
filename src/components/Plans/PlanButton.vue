<template>
  <button :style="isDisable ? 'cursor: pointer' : ''" :disabled="isDisable" class="c-button plan-button p-button">
    {{name}}{{isDisable}}
    <img :src="btnArrow" alt="plan-card-svg" class="image"/>
  </button>
</template>

<script>
import btnArrow from "@/assets/images/plan-btn-arrow.png"

export default {
  name: "PlanButton",
  props: {
    name: {
      type: String,
      default: 'Get Started'
    },
    isDisable: {
      type: Boolean,
    }
  },
  data() {
    return {
      btnArrow
    }
  }
}
</script>

<style scoped>
  .plan-button {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #4545F5;
    color: #ffffff;
    border-radius: 20px;
    padding: 8px 20px 8px 15px;
    margin: 0 auto 50px;
  }
  .image {
    margin-left: 10px;
  }
</style>