<template>
  <main class="main">
    <Filter @selectByCat="filterByCat" :categories="categories" :id="id"/>
    <Cards :cards="this.data"/>
  </main>
  <p>

    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>

  <router-view></router-view>
</template>

<script>
import Cards from './components/Card/Cards'
import Filter from './components/Filter'
import cardsJson from '@/cardsJson.json'
import categoriesJson from '@/categoriesJson.json'
import { register } from 'swiper/element/bundle'
// console.log(VueRouter)
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

<style>
@import "./assets/css/main.css";
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.main {
  margin: 60px auto 135px;
  max-width: 1080px;
}
@media screen and (min-width: 960px) {
  .main {
    margin: 120px auto 171px;
  }
}
</style>
