<template>
  <div class="pf-page">
    <book-comm/>
    <two-rows/>
  </div>
</template>
<script>
import BookComm from './BookComm'
import TwoRows from './TwoRows'
export default {
  data(){
    return{

    }
  },
  components:{
    "book-comm":BookComm,
    "two-rows":TwoRows
  }
}
</script>
<style scoped>
.pf-page{
  padding: 1rem;
  background: #fff;
}
</style>

