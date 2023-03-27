<template>
  <div class="card-content">
    <div class="tag-content">
      <div v-if="this.resizeBrowser < 960">
        <swiper-container class="tag-swiper-container"
          :slidesPerView="'auto'"
          :freeMode="false"
          :observer="true"
          :observeParents="true"
          :breakpoints="{
            960: {
              init: false
            }
          }"
        >
          <swiper-slide :style="type === 'SMB' ? 'width: 25%' : 'width: 40%'">
            <Tag :status="type === 'SMB' ? 'green' : 'blue'" :name="type"/>
          </swiper-slide>
          <swiper-slide :style="type === 'SMB' ? 'width: 80%' : 'width: 100%'">
            <Tag status="violet" :name="category"/>
          </swiper-slide>
          <swiper-slide>
            <Time title="7 min read"/>
          </swiper-slide>
          <swiper-slide />
        </swiper-container>
      </div>
      <div v-else class="desktop-tags">
        <div class="tag-container">
          <Tag :status="type === 'SMB' ? 'green' : 'blue'" :name="type"/>
          <Tag status="violet" :name="category"/>
        </div>
        <Time title="7 min read"/>
      </div>
    </div>
    <div class="card-description__content">
      <p class="description p-small-title">{{descEllipsis}}</p>
    </div>
    <div class="card__footer">
      <User :color="color"/>
      <BtnReadCard />
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag/Tag.vue";
import Time from "@/components/Time.vue";
import User from "@/components/User/User.vue";
import BtnReadCard from "@/components/Cards/BtnReadCard";

export default {
  name: "CardContent",
  components: {
    Tag,
    Time,
    User,
    BtnReadCard
  },
  props: {
    type: {
      type: String
    },
    category: {
      type: String
    },
    color: {
      type: String
    },
    desc: {
      type: String
    }
  },
  data() {
    return {
      resizeBrowser: null
    }
  },
  computed: {
    descEllipsis() {
      const descSplit = this.desc.split('')
      descSplit.splice(60).join('')
      return this.resizeBrowser < 960 ? descSplit.join('') + '...' : this.desc
    }
  },
  created() {
    this.resizeBrowser = window.innerWidth
  }
}
</script>

<style scoped>
  .card-content {
    max-height: 240px;
    padding: 16px 37px 32px 32px;
  }
  .tag-swiper-container {
    display: flex;
    align-items: center;
  }
  .tag-content {
    position: relative;
  }
  .tag-content:after {
    content: '';
    position: absolute;
    top: 0;
    right: -15px;
    z-index: 1;
    display: block;
    height: 72px;
    width: 80px;
    background-image: linear-gradient(to right, rgba(255,0,0,0) 0%, rgba(255,255,255,0.9) 64%);
  }
  .tag-container{
    display: flex;
    align-items: center;
  }
  .desktop-tags {
    display: flex;
  }
  .card-description__content {
    margin-bottom: 24px
  }
  .description {
    color: #1D2452;
    margin: 0;
  }
  @media screen and (min-width: 960px) {
    .description {
      min-height: 84px
    }
  }
  .card__footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
  }
  @media screen and (min-width: 960px) {
    .card__footer {
      flex-direction: row;
      align-items: end;
    }
  }
</style>