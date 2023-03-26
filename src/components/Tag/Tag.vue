<template>
  <div class="tag-wrap">
    <div class="tag p-tag" :style='{backgroundColor: statusParams.bgc, color: statusParams.tc}'>{{ name }}</div>
  </div>
</template>

<script>

export default {
  name: "V-Tag",
  props: {
    status: {
      type: String
    },
    name: {
      type: String
    }
  },
  computed: {
    statusParams() {
      switch(this.status) {
        case 'green':
        return {bgc: '#E1F6E9', tc: '#00A338'}
          // eslint-disable-next-line no-unreachable
        break
        case 'blue':
        return {bgc: '#E4F8FF', tc: '#00A3DE'}
          // eslint-disable-next-line no-unreachable
        break
        case 'violet':
        return {bgc: '#D0D0FD', tc: '#4545F5'}
          // eslint-disable-next-line no-unreachable
        break
        default:
        return{bgc: '#E1F6E9', tc: '#00A338'}
      }
    }
  },
}
</script>

<style scoped>
  .tag-wrap {
    padding: 16px 0;
  }
  .tag-wrap:hover .tag {
    opacity: 0.9;
  }
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 28px;
    border-radius: 20px;
    padding: 4px 12px;
    margin-right: 4px;
    white-space: nowrap;
  }

</style>