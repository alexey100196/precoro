<template>
  <div class="avatar-container">
    <div class="v-avatar" :style="{backgroundColor: color}"></div>
    <div class="user-desc">
      <p class="user-name p-body-2-semibold">Name</p>
      <p class="user-title p-tag">Title</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-User",
  props: {
    color: {
      type: String
    }
  },
}
</script>

<style scoped>
  .avatar-container {
    display: flex;
  }


  .v-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .user-desc {
    padding: 4px 0;
  }
  .user-name, .user-title {
    margin: 0;
  }
  .user-name {
    margin-bottom: 4px;
  }
  .user-title {
    color: #676F8F
  }
</style>