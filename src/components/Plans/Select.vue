<template>
  <div class="select-wrap">
    <vSelect :options="priceForYearsOptions" @option:clear="onClear"/>
  </div>
</template>

<script>
// import {reactive, toRefs} from "vue"
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'

export default {
  name: "V-Select",
  components: {
    vSelect
  },
  props: {
    currencyPrice: {
      type: Number,
      default: 35
    }
  },
  data() {
    return {
      options: ['1 user | 420/year']
    }
  },
  computed: {
    priceForYearsOptions() {
      const MONTH = 12
      const YEARS = 20
      const options = this.options
      options.length=0
      for (let i = 1; i <= YEARS; i++) {
        options.push(`${i} ${i === 1 ? 'user' : 'users'} $${this.currencyPrice * MONTH * i}/year`)
      }
      return this.options
    }
  },
}
</script>

<style scoped>
.select-wrap {
  max-width: 280px;
  margin: 0 auto 25px;
}
>>> {
  --vs-controls-color: #1D2452;
  /*--vs-border-color: #4545F5;*/
  --vs-dropdown-option-color: #1D2452;
  --vs-dropdown-option--active-bg: #EDEEF3;
  --vs-dropdown-option--active-color: #4545F5;
  --vs-dropdown-max-height: 195px;
  --vs-selected-border-color: #4545F5
}
</style>