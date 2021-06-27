<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/maintabbar/MainTabBar";
  export default {
    components: {MainTabBar}
  }

</script>

<style lang="less">
@import "assets/css/base.css";
</style>
