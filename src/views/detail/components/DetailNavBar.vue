<template>
  <NavBar>
    <template #left>
      <img
        class="back"
        src="@/assets/img/navbar/back.svg"
        alt=""
        @click="backClick"
      >
    </template>
    <template #center>
      <div class="title">
        <div
          v-for="(title,index) in titles"
          class="title-item"
          :class="{active:currentIndex===index}"
          @click="titleItemClick(index)"
        >
          {{ title }}
        </div>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index
      this.$emit("detailNavBarClick",index)
    },
    backClick() {
      this.$router.back()
    },
  }
}
</script>

<style scoped>

.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.active {
  color: red;
}

.back {
  width: 32px;
  height: 32px;
  margin: 5px auto 0;

}
</style>
