<template>
  <div class="hello">  
    <div class="footer">
      <router-link to="home" class="footer_li">
        <div>首页</div>
      </router-link>
      <a class="footer_li">
        <div>闪送超市</div>
      </a>
      <a class="footer_li">
        <div>购物车</div>
        
      </a>
      <a class="footer_li">
        <div>我的</div>
      </a>
    </div>
    
  </div>
</template>

<script>
require("../../static/reset.css");
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
