<template>
  <p class="time">{{title}}</p>
</template>

<script>

export default {
  name: "V-Time",
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
  .time {
    margin: 10px 4px;
    padding-top: 10px;
  }
</style>