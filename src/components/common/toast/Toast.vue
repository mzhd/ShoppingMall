<template>
  <div v-show="show" class="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message:'',
      show:false,
    }
  },
  methods:{
    show(message,duration=1000){
      this.message=message
      this.show=true
      setTimeout(()=>{
        this.message=''
        this.show=false
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(50%,50%);
    padding: 8px 10px;
    background-color: rgba(0,0,0,0.8);
  }
</style>
