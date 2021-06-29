<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
import ObserveImage from '@better-scroll/observe-image'
import {debounce} from "@/common/utils";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullDownRefresh: {
      type: Boolean,
      default() {
        return false
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    },
    observeImage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      bs: null
    }
  },
  mounted() {
    BScroll.use(PullDown)
    BScroll.use(PullUp)
    BScroll.use(ObserveImage)
    this.bs = new BScroll(this.$refs.wrapper, {
      //设置监听滚动类型，0不监听，3监听所有，一般设置为3
      probeType: this.probeType,
      pullDownRefresh: this.pullDownRefresh,
      pullUpLoad: this.pullUpLoad,
      observeImage: this.observeImage,
      click: true
    })
    if(this.probeType===3)
      this.onScroll()
    if(this.pullDownRefresh)
      this.onPullingDown()
    if(this.pullUpLoad)
      this.onPullingUp()
  }, methods: {
    scrollTo(x, y, time = 300) {
      this.bs.scrollTo(x, y, time)
    },
    getScrollY(){
      return this.bs?this.bs.y:0
    },
    //BScroll监听事件
    onScroll() {
      this.bs.on('scroll', (position) => {
        // console.log(position);
        this.$emit("onScroll", position)
      })
    },
    onPullingDown() {
      this.bs.on('pullingDown', () => {
        const refresh=debounce(()=>{
          console.log("下拉刷新");
          this.$emit('pullingDown')
          this.bs.finishPullDown()
        },2000)
        refresh()
      })
    },
    onPullingUp() {
      this.bs.on('pullingUp', () => {
        const loadMore=debounce(()=>{
          console.log("上拉加载");
          this.$emit('pullingUp')
          this.bs.finishPullUp()
        },2000)
        loadMore()
      })
    },

  }
}
</script>

<style scoped>

</style>
