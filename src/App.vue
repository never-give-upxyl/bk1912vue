<template>
  <div id="app">
   <router-view></router-view>
   <Tarbar v-if="$route.meta.flag"/>  
  </div>
</template>
<script>
import Tarbar from "@common/tarbar"
export default {
    name:"App",
    components:{
      Tarbar,
    }
}
</script>
<style>

</style>
