<template>
  <main class="main">
    <Filter @selectByCat="filterByCat" :categories="categories" :id="id"/>
    <Cards :cards="this.data"/>
  </main>
</template>

<script>
import Cards from '@/components/Cards'
import Filter from '@/components/Filter'
import cardsJson from '@/cardsJson.json'
import categoriesJson from '@/categoriesJson.json'
import { register } from 'swiper/element/bundle'

export default {
  name: 'App',
  components: {
    Cards,
    Filter,
  },
  data() {
    return {
      data: [],
      categories: categoriesJson,
      id: 1
    }
  },
  methods: {
    filterByCat(cat) {
      const {category, id} = cat
      this.id = id
      if (category === 'All') {
        this.data = cardsJson
      } else if (category === 'SMB' || category === 'Enterprise') {
        this.data = cardsJson.filter(card => card.type === category)
      } else {
        this.data = cardsJson.filter(card => card.category === category)
      }
    },
  },
  created() {
    register()
    this.data = cardsJson
  }
}
</script>

<style scoped>
</style>
