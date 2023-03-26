<template>
  <div class="currency-list">
    <p class="p-body-2 currency"
       v-for="({cur, id, price}) in currency"
       :key="id"
       @click="$emit('handleCur', {cur, id, price})"
       :class="[id === handleCur ? 'isActive' : '', 'p-body-2', 'currency']"
    >
      {{cur}}</p>
  </div>
</template>

<script>
export default {
  name: "V-Currency",
  props: {
    handleCur: {
      type: Number
    }
  },
  data() {
    return {
      currency: {
        usd: {
          id: 1,
          cur: 'USD',
          price: 35,
        },
        eur: {
          id: 2,
          cur: 'EUR',
          price: 32,
        },
        gbp: {
          id: 3,
          cur: 'GBP',
          price: 29,
        },
      }
    }
  }
}
</script>

<style scoped>
  .currency-list {
    display: flex;
    justify-content: center;
    color: #676F8F;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 960px) {
    .currency-list {
      margin-bottom: 39px;
      justify-content: end;
    }
  }
  .currency {
    color: #676F8F;
    margin-right: 8px;
    cursor: pointer;
  }
  .currency:hover {
    color: #4545F5;
  }
  .currency:after {
    content: '|';
    color: #DDDEE5;
    margin-left: 8px;
  }
  .currency:last-child:after {
    content: ''
  }
  .isActive {
    color: #4545F5;
  }
</style>