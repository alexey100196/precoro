<template>
  <div class="btnRead p-button">Read story
    <img :src="textBtnArrow" alt="arrow" class="arrow-text-btn"/>
  </div>
</template>

<script>
import textBtnArrow from '@/assets/images/arrow-text-btn.png'
export default {
  name: "BtnReadCard",
  data() {
    return {
      textBtnArrow
    }
  }
}
</script>

<style scoped>
  .btnRead {
    display: flex;
    align-items: center;
    color: #4545F5;
    margin: 24px 0 0 0;
  }
  @media screen and (min-width: 960px) {
    .btnRead {
      margin: 0;
    }
  }
</style>