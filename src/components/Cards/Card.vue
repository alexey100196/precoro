<template>
  <div class="card">
    <div class="card-picture" :style="{backgroundColor: info.color}"/>
    <CardContent :type="info.type" :category="info.category" :color="info.color" :desc="info.description"/>
  </div>
</template>

<script>
import CardContent from "@/components/Cards/CardContent";

export default {
  name: "V-Card",
  components: {
    CardContent,
  },
  props: ["info"],
}
</script>

<style scoped>
  .card {
    background: #FFFFFF;
    border: 1.5px solid #EEF0F6;
    border-radius: 8px;
    max-width: 318px;
    height: 513px;
    width: 100%;
    overflow: hidden;
    margin: 0 auto 33px;
  }
  @media screen and (min-width: 960px) {
    .card {
      max-width: 528px;
      margin: 0;
    }
  }
  .card-picture {
    height: 160px;
  }
  @media screen and (min-width: 960px) {
    .card-picture {
      height: 244px;
    }
  }
</style>